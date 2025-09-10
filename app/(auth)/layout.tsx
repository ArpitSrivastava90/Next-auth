import { authOptions } from "@/lib/auth/options";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

interface LayoutProps {
  children: React.ReactNode;
}

export default async function AuthLayout({ children }: LayoutProps) {
  const session = await getServerSession(authOptions);

  if (session?.user) {
    redirect("/");
  }

  return <div>{children}</div>;
}
