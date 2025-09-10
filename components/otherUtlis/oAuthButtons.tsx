"use client"; // This is a client component

import { Button } from "@/components/ui/button";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { signIn } from "next-auth/react";

export default function OAuthButtons() {
  return (
    <div className="flex flex-col gap-4 w-full">
      <Button
        onClick={() => signIn("google", { callbackUrl: "/" })}
        variant="outline"
        className="w-full flex items-center justify-center gap-2 py-4 hover:bg-black hover:text-white transition-all duration-300"
      >
        <FcGoogle className="w-5 h-5" />
        Sign up with Google
      </Button>

      <Button
        onClick={() => signIn("github", { callbackUrl: "/" })}
        variant="outline"
        className="w-full flex items-center justify-center gap-2 py-4 hover:bg-black hover:text-white transition-all duration-300"
      >
        <FaGithub className="w-5 h-5" />
        Sign up with GitHub
      </Button>
    </div>
  );
}
