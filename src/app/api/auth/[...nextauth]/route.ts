// app/api/auth/[...nextauth]/route.ts
import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { MongoDBAdapter } from "@next-auth/mongodb-adapter";
import clientPromise from "../../../../../lib/mongodb";
import type { DefaultSession, User, Account, Profile } from "next-auth";

// Extend the default User and Session types
declare module "next-auth" {
  interface User {
    id: string; // Custom property
  }

  interface Session {
    user: {
      id: string; // Custom property in session
      name?: string | null;
      email?: string | null;
      image?: string | null;
    };
  }
}

export const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
  ],
  adapter: MongoDBAdapter(clientPromise),
  callbacks: {
    async session({ session, user }: { session: DefaultSession & { user: User }; user: User }) {
      session.user.id = user.id; // Add user ID to session
      return session;
    },
  },
  pages: {
    signIn: '/auth/signin', // Custom sign-in page
  },
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
