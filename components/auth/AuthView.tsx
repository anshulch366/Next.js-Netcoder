"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState, type FormEvent } from "react";
import {
  AppleIcon,
  EyeIcon,
  GoogleIcon,
  IndiaFlagIcon,
} from "@/components/lms/Icons";
import {
  loginDemoOrProvider,
  loginStudent,
  registerStudent,
  syncServerSession,
  useLmsSession,
} from "@/lib/lms-store";
import { validateSafeRedirect } from "@/lib/security";
import styles from "./auth.module.css";

interface AuthViewProps {
  mode: "login" | "signup";
}

function getSafeNextPath(): string {
  if (typeof window === "undefined") return "/dashboard";
  const raw = new URLSearchParams(window.location.search).get("next");
  return validateSafeRedirect(raw, "/dashboard");
}

export default function AuthView({ mode }: AuthViewProps) {
  const router = useRouter();
  const session = useLmsSession();

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [agreed, setAgreed] = useState(false);
  const [rememberMe, setRememberMe] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [infoMessage, setInfoMessage] = useState<string | null>(null);

  useEffect(() => {
    if (!submitting && session.hydrated && session.loggedIn) {
      let active = true;
      void syncServerSession(session.account, true).then(() => {
        if (active) {
          router.replace(getSafeNextPath());
        }
      });
      return () => {
        active = false;
      };
    }
  }, [submitting, session.hydrated, session.loggedIn, session.account, router]);

  function fillDemoCredentials() {
    setEmail("gouravjaryal94@gmail.com");
    setPassword("Netcoder@2026");
    setError(null);
    setInfoMessage("Demo student credentials filled. Click Sign In to open the LMS.");
  }

  async function handleOAuth(provider: "Google" | "Apple") {
    if (submitting) return;
    setError(null);
    setSubmitting(true);
    try {
      await loginDemoOrProvider(provider);
      router.push(getSafeNextPath());
    } finally {
      setSubmitting(false);
    }
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (submitting) return;
    setError(null);
    setInfoMessage(null);
    setSubmitting(true);

    try {
      if (mode === "login") {
        const result = await loginStudent({ email, password, rememberMe });
        if (!result.ok) {
          setError(result.error);
          return;
        }
        router.push(getSafeNextPath());
        return;
      }

      if (password !== confirmPassword) {
        setError("Passwords do not match. Please re-enter the same password.");
        return;
      }
      if (!agreed) {
        setError("Please agree to the Terms of Service and Privacy Policy to continue.");
        return;
      }

      const result = await registerStudent({ fullName, email, mobile, password });
      if (!result.ok) {
        setError(result.error);
        return;
      }
      router.push(getSafeNextPath());
    } finally {
      setSubmitting(false);
    }
  }

  const isSignup = mode === "signup";

  return (
    <div className={styles.authShell}>
      <div className={styles.mediaPanel}>
        <Image
          src={isSignup ? "/images/auth/hero-headphones.webp" : "/images/Learning/What Makes a Good Logo.png"}
          alt={isSignup ? "Student listening with studio headphones" : "Creative portrait from the Netcoder design learning guide"}
          fill
          priority
          sizes="(max-width: 960px) 100vw, 46vw"
          className={styles.mediaImage}
        />
      </div>

      <div className={styles.formColumn}>
        <div className={styles.formWrap}>
          <div className={styles.mobileBrand}>
            <Image src="/images/logo/logo.png" alt="Netcoder Technology" width={400} height={160} priority />
          </div>

          <div className={styles.header}>
            <h1>{isSignup ? "Create Your Account" : "Sign In To NetCoder"}</h1>
            <p>{isSignup ? "Start Learning With NetCoder." : "Welcome Back! Continue Learning With NetCoder."}</p>
          </div>

          <form className={styles.form} onSubmit={handleSubmit} noValidate>
            {isSignup && (
              <div className={styles.field}>
                <label htmlFor="auth-fullname">Full Name</label>
                <input
                  id="auth-fullname"
                  className={styles.input}
                  type="text"
                  autoComplete="name"
                  placeholder="Enter your full name"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                />
              </div>
            )}

            <div className={styles.field}>
              <label htmlFor="auth-email">Email Address</label>
              <input
                id="auth-email"
                className={styles.input}
                type="email"
                autoComplete="email"
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            {isSignup && (
              <div className={styles.field}>
                <label htmlFor="auth-mobile">Mobile Number</label>
                <div className={styles.mobileBox}>
                  <span className={styles.countryPrefix}>
                    <IndiaFlagIcon />
                    <span>+91</span>
                  </span>
                  <input
                    id="auth-mobile"
                    className={styles.mobileInput}
                    type="tel"
                    inputMode="numeric"
                    maxLength={10}
                    placeholder="Enter your 10-digits mobile number"
                    value={mobile}
                    onChange={(e) => setMobile(e.target.value.replace(/\D/g, "").slice(0, 10))}
                  />
                </div>
              </div>
            )}

            <div className={styles.field}>
              <label htmlFor="auth-password">Password</label>
              <div className={styles.passwordBox}>
                <input
                  id="auth-password"
                  className={styles.passwordInput}
                  type={showPassword ? "text" : "password"}
                  autoComplete={isSignup ? "new-password" : "current-password"}
                  placeholder={isSignup ? "Create a password (8+ chars, letter & number)" : "Enter your password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <button
                  type="button"
                  className={styles.eyeButton}
                  onClick={() => setShowPassword((prev) => !prev)}
                  aria-label={showPassword ? "Hide password" : "Show password"}
                >
                  <EyeIcon off={showPassword} />
                </button>
              </div>
            </div>

            {isSignup ? (
              <div className={styles.field}>
                <label htmlFor="auth-confirm-password">Confirm Password</label>
                <div className={styles.passwordBox}>
                  <input
                    id="auth-confirm-password"
                    className={styles.passwordInput}
                    type={showConfirm ? "text" : "password"}
                    autoComplete="new-password"
                    placeholder="Re-enter your password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                  />
                  <button
                    type="button"
                    className={styles.eyeButton}
                    onClick={() => setShowConfirm((prev) => !prev)}
                    aria-label={showConfirm ? "Hide confirm password" : "Show confirm password"}
                  >
                    <EyeIcon off={showConfirm} />
                  </button>
                </div>
              </div>
            ) : (
              <div className={styles.metaRow}>
                <label className={styles.checkboxLabel}>
                  <input
                    type="checkbox"
                    checked={rememberMe}
                    onChange={(e) => setRememberMe(e.target.checked)}
                  />
                  <span>Keep me signed in</span>
                </label>
                <button
                  type="button"
                  className={styles.textAction}
                  onClick={fillDemoCredentials}
                >
                  Use demo credentials
                </button>
              </div>
            )}

            {isSignup && (
              <label className={styles.checkboxLabel}>
                <input
                  type="checkbox"
                  checked={agreed}
                  onChange={(e) => setAgreed(e.target.checked)}
                />
                <span>agree to the Terms of Service and Privacy Policy</span>
              </label>
            )}

            {!isSignup && (
              <div className={styles.infoBanner}>
                <span>
                  Demo: <strong>gouravjaryal94@gmail.com</strong> / <strong>Netcoder@2026</strong>
                </span>
                <button type="button" className={styles.demoFillBtn} onClick={fillDemoCredentials}>
                  Auto-fill
                </button>
              </div>
            )}

            {infoMessage && !error && (
              <div className={styles.infoBanner}>{infoMessage}</div>
            )}

            {error && (
              <div className={styles.errorBanner} role="alert">
                {error}
              </div>
            )}

            <button type="submit" className={styles.submitButton} disabled={submitting}>
              {submitting
                ? isSignup
                  ? "Creating Account..."
                  : "Signing In..."
                : isSignup
                  ? "Create Account"
                  : "Sign In"}
            </button>
          </form>

          <div className={styles.divider}>OR</div>

          <div className={styles.oauthGrid}>
            <button
              type="button"
              className={styles.oauthButton}
              disabled={submitting}
              onClick={() => void handleOAuth("Google")}
            >
              <GoogleIcon />
              <span>Continue with Google</span>
            </button>
            <button
              type="button"
              className={styles.oauthButton}
              disabled={submitting}
              onClick={() => void handleOAuth("Apple")}
            >
              <AppleIcon />
              <span>Continue with Apple</span>
            </button>
          </div>

          <p className={styles.switchPrompt}>
            {isSignup ? (
              <>
                Already have an account? <Link href="/login">Sign in</Link>
              </>
            ) : (
              <>
                Don&apos;t have an account? <Link href="/signup">Create Account</Link>
              </>
            )}
          </p>

          <p className={styles.exploreSite}>
            <Link href="/">&larr; Back to Netcoder Website</Link>
          </p>
        </div>
      </div>
    </div>
  );
}
