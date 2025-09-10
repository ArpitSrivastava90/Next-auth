import { prisma } from "@/lib/prisma";
import { randomBytes } from "crypto";

export async function createPrismaSession(userId: string) {
  const sessionToken = randomBytes(32).toString("hex");
  const expires = new Date(Date.now() + 60 * 60 * 1000); // 1 hour

  await prisma.session.create({
    data: {
      userId,
      sessionToken,
      expires,
    },
  });

  return sessionToken;
}
