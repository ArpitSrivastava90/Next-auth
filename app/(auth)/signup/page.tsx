"use client";

import SignUpForm from "@/components/auth/SignUpForm";
import Link from "next/link";
import OAuthButtons from "@/components/otherUtlis/oAuthButtons";
import Image from "next/image";
import img from "../image/logo-1.jpg";

export default function SignUpPage() {
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-gradient-to-tr from-gray-100 to-gray-200 px-4">
      <div className="w-full max-w-4xl bg-white rounded-3xl border border-gray-200 shadow-xl overflow-hidden flex flex-col md:flex-row">
        <div className="flex-1 p-6 md:p-12 flex items-center justify-center">
          <div className="w-full max-w-md">
            <h2 className="text-3xl font-bold mb-6 text-center md:text-left">
              Create your account
            </h2>

            <SignUpForm />

            <p className="text-sm text-gray-500 mt-4 text-center md:text-left">
              Already have an account?{" "}
              <Link
                href="/signin"
                className="font-medium text-blue-600 hover:underline"
              >
                Sign in
              </Link>
            </p>
          </div>
        </div>

        <div className="hidden md:block w-px bg-gray-200" />

        <div className="flex-1 p-6 md:p-12 flex flex-col items-center justify-center gap-4">
          <Image src={img} alt="Logo" className="w-42 h-42 mb-4" />

          <h3 className="text-lg font-medium text-gray-700 mb-2">
            Or sign up with
          </h3>

          <OAuthButtons />
        </div>
      </div>
    </div>
  );
}
