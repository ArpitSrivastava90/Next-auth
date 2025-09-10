"use client";

import { signOut } from "next-auth/react";
import { motion } from "framer-motion";

export default function LogoutButton() {
  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={() =>
        signOut({
          callbackUrl: "/signin", // Redirect after logout
        })
      }
      className="px-5 py-2 bg-gray-900 text-white font-medium rounded-lg shadow-sm hover:shadow-md transition-all duration-200"
    >
      Logout
    </motion.button>
  );
}
