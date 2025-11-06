"use client";
import { useAuthActions } from "@convex-dev/auth/react";
import { useState } from "react";
import { toast } from "sonner";

export function SignInForm() {
  const { signIn } = useAuthActions();
  const [flow, setFlow] = useState<"signIn" | "signUp">("signIn");
  const [submitting, setSubmitting] = useState(false);

  return (
    <div className="glass-panel mx-auto max-w-md overflow-hidden p-8">
      <div className="relative z-10 space-y-2 text-center">
        <h3 className="text-2xl font-semibold tracking-tight text-slate-50">
          Access your space
        </h3>
        <p className="text-sm text-slate-300">
          {flow === "signIn"
            ? "Welcome back! Enter your details to continue."
            : "Create an account to start storing securely."}
        </p>
      </div>
      <form
        className="relative z-10 mt-8 space-y-5"
        onSubmit={(e) => {
          e.preventDefault();
          setSubmitting(true);
          const formData = new FormData(e.target as HTMLFormElement);
          formData.set("flow", flow);
          void signIn("password", formData).catch((_error) => {
            const toastTitle =
              flow === "signIn"
                ? "Could not sign in, did you mean to sign up?"
                : "Could not sign up, did you mean to sign in?";
            toast.error(toastTitle);
            setSubmitting(false);
          });
        }}
      >
        <div className="space-y-2 text-left">
          <label
            htmlFor="email"
            className="text-sm font-medium text-slate-200"
          >
            Email
          </label>
          <input
            className="input-field"
            id="email"
            type="email"
            name="email"
            placeholder="name@company.com"
            required
          />
        </div>
        <div className="space-y-2 text-left">
          <label
            htmlFor="password"
            className="text-sm font-medium text-slate-200"
          >
            Password
          </label>
          <input
            className="input-field"
            id="password"
            type="password"
            name="password"
            placeholder="Enter your password"
            required
          />
        </div>
        <button className="btn-primary w-full" type="submit" disabled={submitting}>
          {flow === "signIn" ? "Sign in" : "Sign up"}
        </button>
        <div className="text-center text-sm text-slate-400">
          <span>
            {flow === "signIn"
              ? "Don't have an account? "
              : "Already have an account? "}
          </span>
          <button
            type="button"
            className="link-text"
            onClick={() => setFlow(flow === "signIn" ? "signUp" : "signIn")}
          >
            {flow === "signIn" ? "Sign up instead" : "Sign in instead"}
          </button>
        </div>
      </form>
      <div className="relative z-10 my-6 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.3em] text-slate-400">
        <span className="h-px flex-1 bg-white/10" />
        <span>or</span>
        <span className="h-px flex-1 bg-white/10" />
      </div>
      <button
        className="btn-secondary relative z-10 w-full"
        onClick={() => void signIn("anonymous")}
      >
        Sign in anonymously
      </button>
    </div>
  );
}
