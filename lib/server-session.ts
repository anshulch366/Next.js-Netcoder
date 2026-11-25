import crypto from "node:crypto";

export const SESSION_COOKIE_NAME = "netcoder_lms_session";
const DEFAULT_TTL_SECONDS = 60 * 60 * 24 * 7; // 7 days

export interface ServerSessionPayload {
  uid: string;
  email: string;
  name: string;
  exp: number;
}

function getSessionSecret(): string {
  return process.env.SESSION_SECRET || "netcoder-lms-local-signing-secret-v1";
}

function sign(encodedPayload: string): string {
  return crypto
    .createHmac("sha256", getSessionSecret())
    .update(encodedPayload)
    .digest("base64url");
}

export function createSessionToken(
  user: { uid: string; email: string; name: string },
  ttlSeconds = DEFAULT_TTL_SECONDS,
): string {
  const payload: ServerSessionPayload = {
    uid: user.uid,
    email: user.email,
    name: user.name,
    exp: Math.floor(Date.now() / 1000) + ttlSeconds,
  };
  const encoded = Buffer.from(JSON.stringify(payload), "utf8").toString("base64url");
  const signature = sign(encoded);
  return `${encoded}.${signature}`;
}

export function verifySessionToken(token: string | undefined | null): ServerSessionPayload | null {
  if (!token || typeof token !== "string") return null;
  const parts = token.split(".");
  if (parts.length !== 2) return null;
  const [encoded, signature] = parts;
  if (!encoded || !signature) return null;

  const expected = sign(encoded);
  const sigBuf = Buffer.from(signature, "utf8");
  const expBuf = Buffer.from(expected, "utf8");
  if (sigBuf.length !== expBuf.length) return null;
  if (!crypto.timingSafeEqual(sigBuf, expBuf)) return null;

  try {
    const decoded = JSON.parse(Buffer.from(encoded, "base64url").toString("utf8")) as ServerSessionPayload;
    if (!decoded || typeof decoded.email !== "string" || typeof decoded.exp !== "number") {
      return null;
    }
    if (decoded.exp <= Math.floor(Date.now() / 1000)) {
      return null;
    }
    return decoded;
  } catch {
    return null;
  }
}
