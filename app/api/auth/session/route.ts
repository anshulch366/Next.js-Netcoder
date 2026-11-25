import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import { sanitizeText, validateEmail } from "@/lib/security";
import {
  createSessionToken,
  SESSION_COOKIE_NAME,
  verifySessionToken,
} from "@/lib/server-session";

export const dynamic = "force-dynamic";

function isHttpsRequest(request: Request): boolean {
  const forwardedProto = request.headers.get("x-forwarded-proto");
  if (forwardedProto) {
    return forwardedProto.split(",")[0].trim() === "https";
  }
  try {
    return new URL(request.url).protocol === "https:";
  } catch {
    return false;
  }
}

export async function GET() {
  const cookieStore = await cookies();
  const token = cookieStore.get(SESSION_COOKIE_NAME)?.value;
  const session = verifySessionToken(token);

  if (!session) {
    return NextResponse.json(
      { authenticated: false },
      { status: 200, headers: { "Cache-Control": "no-store" } },
    );
  }

  return NextResponse.json(
    {
      authenticated: true,
      user: { uid: session.uid, email: session.email, name: session.name },
    },
    { status: 200, headers: { "Cache-Control": "no-store" } },
  );
}

export async function POST(request: Request) {
  let body: { uid?: string; email?: string; name?: string; rememberMe?: boolean };
  try {
    body = (await request.json()) as typeof body;
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid request payload." }, { status: 400 });
  }

  const email = sanitizeText(String(body.email ?? ""), 254).toLowerCase();
  const name = sanitizeText(String(body.name ?? "Student"), 120) || "Student";
  const uid = sanitizeText(String(body.uid ?? ""), 80) || `usr-${Date.now()}`;

  if (!validateEmail(email)) {
    return NextResponse.json({ ok: false, error: "Invalid email address." }, { status: 400 });
  }

  const token = createSessionToken({ uid, email, name });
  const response = NextResponse.json(
    { ok: true },
    { status: 200, headers: { "Cache-Control": "no-store" } },
  );

  response.cookies.set(SESSION_COOKIE_NAME, token, {
    httpOnly: true,
    sameSite: "lax",
    secure: isHttpsRequest(request),
    path: "/",
    ...(body.rememberMe !== false ? { maxAge: 60 * 60 * 24 * 7 } : {}),
  });

  return response;
}

export async function DELETE(request: Request) {
  const response = NextResponse.json(
    { ok: true },
    { status: 200, headers: { "Cache-Control": "no-store" } },
  );
  response.cookies.set(SESSION_COOKIE_NAME, "", {
    httpOnly: true,
    sameSite: "lax",
    secure: isHttpsRequest(request),
    path: "/",
    maxAge: 0,
  });
  return response;
}
