// app/(auth)/signin/SignInClient.tsx
"use client";


import SignInForm from "@/components/auth/SignInForm";
import OAuthSignInButtons from "@/components/otherUtlis/oAuthButtons";
import Link from "next/link";

export default function SignInClient() {

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-tr from-gray-100 to-gray-200 px-4">
      <div className="w-full max-w-md bg-white rounded-3xl border border-gray-200 p-8 shadow-xl flex flex-col items-center">
        <div className="text-center mb-6 space-y-2">
          <h1 className="text-3xl font-bold text-gray-900">Welcome Back</h1>
          <p className="text-sm text-gray-500">Sign in to continue</p>
        </div>

        <SignInForm />

        <div className="flex items-center gap-3 my-6 w-full">
          <div className="h-px flex-1 bg-gray-200" />
          <span className="text-xs text-gray-400 uppercase">
            or continue with
          </span>
          <div className="h-px flex-1 bg-gray-200" />
        </div>

        <OAuthSignInButtons />

        <p className="text-center text-sm text-gray-500 mt-6">
          Don’t have an account?{" "}
          <Link
            href="/signup"
            className="font-medium text-blue-600 hover:underline"
          >
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
}
