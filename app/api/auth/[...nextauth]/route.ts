import { authOptions } from "@/lib/auth/options";
import NextAuth from "next-auth";
const hanlder = NextAuth(authOptions);
export { hanlder as GET, hanlder as POST };
