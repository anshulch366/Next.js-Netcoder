const RATE_LIMIT_MAX_ATTEMPTS = 5;
const RATE_LIMIT_WINDOW_MS = 30_000;

const failedLoginAttempts = new Map<string, { count: number; lockedUntil: number }>();

function toHex(bytes: Uint8Array): string {
  return Array.from(bytes, (b) => b.toString(16).padStart(2, "0")).join("");
}

function fromHex(hex: string): Uint8Array {
  const clean = hex.length % 2 === 0 ? hex : "";
  const out = new Uint8Array(clean.length / 2);
  for (let i = 0; i < out.length; i++) {
    out[i] = Number.parseInt(clean.slice(i * 2, i * 2 + 2), 16);
  }
  return out;
}

export function constantTimeEqual(a: string, b: string): boolean {
  if (a.length !== b.length) return false;
  let diff = 0;
  for (let i = 0; i < a.length; i++) {
    diff |= a.charCodeAt(i) ^ b.charCodeAt(i);
  }
  return diff === 0;
}

function randomSaltHex(byteLength = 16): string {
  const bytes = new Uint8Array(byteLength);
  if (typeof globalThis.crypto !== "undefined" && globalThis.crypto.getRandomValues) {
    globalThis.crypto.getRandomValues(bytes);
  } else {
    for (let i = 0; i < bytes.length; i++) {
      bytes[i] = Math.floor(Math.random() * 256);
    }
  }
  return toHex(bytes);
}

/**
 * Pure-JS fallback digest used only when Web Crypto SubtleCrypto is unavailable
 * (e.g. non-localhost plain HTTP LAN preview).
 */
function fallbackSaltedDigest(password: string, saltHex: string): string {
  let h1 = 0x811c9dc5;
  let h2 = 0x9e3779b9;
  const input = `${saltHex}:${password}`;
  for (let round = 0; round < 64; round++) {
    for (let i = 0; i < input.length; i++) {
      const code = input.charCodeAt(i);
      h1 ^= code + round;
      h1 = Math.imul(h1, 0x01000193) >>> 0;
      h2 = (Math.imul(h2 ^ code, 0x85ebca6b) + (h1 >>> 3)) >>> 0;
    }
  }
  return `${h1.toString(16).padStart(8, "0")}${h2.toString(16).padStart(8, "0")}`;
}

export async function hashPassword(password: string, existingSaltHex?: string): Promise<string> {
  const saltHex = existingSaltHex ?? randomSaltHex(16);
  const subtle = typeof globalThis.crypto !== "undefined" ? globalThis.crypto.subtle : undefined;

  if (subtle) {
    try {
      const enc = new TextEncoder();
      const keyMaterial = await subtle.importKey(
        "raw",
        enc.encode(password),
        { name: "PBKDF2" },
        false,
        ["deriveBits"],
      );
      const saltBytes = fromHex(saltHex);
      const saltBuffer = saltBytes.buffer.slice(
        saltBytes.byteOffset,
        saltBytes.byteOffset + saltBytes.byteLength,
      ) as ArrayBuffer;
      const derived = await subtle.deriveBits(
        {
          name: "PBKDF2",
          salt: saltBuffer,
          iterations: 15_000,
          hash: "SHA-256",
        },
        keyMaterial,
        256,
      );
      return `pbkdf2:${saltHex}:${toHex(new Uint8Array(derived))}`;
    } catch {
      // Fall through cleanly if SubtleCrypto rejects in a restricted context.
    }
  }

  return `fb:${saltHex}:${fallbackSaltedDigest(password, saltHex)}`;
}

export async function verifyPassword(password: string, storedHash: string): Promise<boolean> {
  if (!storedHash) return false;
  const parts = storedHash.split(":");
  if (parts.length !== 3) return false;
  const [scheme, saltHex] = parts;
  if (scheme === "pbkdf2") {
    const candidate = await hashPassword(password, saltHex);
    return constantTimeEqual(candidate, storedHash);
  }
  if (scheme === "fb") {
    const candidate = `fb:${saltHex}:${fallbackSaltedDigest(password, saltHex)}`;
    return constantTimeEqual(candidate, storedHash);
  }
  return false;
}

export function sanitizeText(value: string, maxLength = 160): string {
  return value
    .replace(/[\u0000-\u001F\u007F]/g, "")
    .trim()
    .slice(0, maxLength);
}

export function validateEmail(email: string): boolean {
  const clean = email.trim();
  return clean.length <= 254 && /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(clean);
}

export function validatePasswordStrength(password: string): string | null {
  if (password.length < 8) {
    return "Password must be at least 8 characters long.";
  }
  if (!/[A-Za-z]/.test(password) || !/[0-9]/.test(password)) {
    return "Password must include at least one letter and one number.";
  }
  return null;
}

export function validateSafeRedirect(nextPath: string | null | undefined, fallback = "/dashboard"): string {
  if (!nextPath) return fallback;
  const trimmed = nextPath.trim();
  if (!trimmed.startsWith("/") || trimmed.startsWith("//") || trimmed.includes("\\")) {
    return fallback;
  }
  if (trimmed === "/login" || trimmed === "/signup" || trimmed === "/create-account") {
    return fallback;
  }
  return trimmed;
}

export function checkLoginRateLimit(email: string): { allowed: true } | { allowed: false; retryAfterSec: number } {
  const key = email.trim().toLowerCase();
  const now = Date.now();
  const entry = failedLoginAttempts.get(key);
  if (!entry) return { allowed: true };
  if (entry.lockedUntil > now) {
    return { allowed: false, retryAfterSec: Math.max(1, Math.ceil((entry.lockedUntil - now) / 1000)) };
  }
  if (entry.lockedUntil > 0 && entry.lockedUntil <= now) {
    failedLoginAttempts.delete(key);
  }
  return { allowed: true };
}

export function recordFailedLoginAttempt(email: string): void {
  const key = email.trim().toLowerCase();
  const now = Date.now();
  const entry = failedLoginAttempts.get(key) ?? { count: 0, lockedUntil: 0 };
  const nextCount = entry.count + 1;
  failedLoginAttempts.set(key, {
    count: nextCount,
    lockedUntil: nextCount >= RATE_LIMIT_MAX_ATTEMPTS ? now + RATE_LIMIT_WINDOW_MS : 0,
  });
}

export function clearFailedLoginAttempts(email: string): void {
  failedLoginAttempts.delete(email.trim().toLowerCase());
}
