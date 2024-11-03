// app/api/auth/[...nextauth]/route.ts
import NextAuth, { NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { MongoDBAdapter } from "@next-auth/mongodb-adapter";
import clientPromise from "../../../../../lib/mongodb";
import type { DefaultSession, User } from "next-auth";

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

const authOptions: NextAuthOptions = {
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

// Set up the NextAuth handler using authOptions
const handler = NextAuth(authOptions);

// Export GET and POST handlers for the Next.js route
export { handler as GET, handler as POST };
