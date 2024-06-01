import NextAuth from "next-auth/next";
import { authOptions } from '@/lib/session';
import { NextApiRequest, NextApiResponse } from "next";
export { handler as GET, handler as POST };

async function handler(req: NextApiRequest, res: NextApiResponse) {
  return await NextAuth(req, res, authOptions);
}