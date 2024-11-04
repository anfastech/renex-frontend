// app/api/auth/[...nextauth]/route.ts

import NextAuth from "next-auth/next"; // Use the correct import for NextAuth
import GoogleProvider from "next-auth/providers/google";
import { MongoDBAdapter } from "@next-auth/mongodb-adapter";
import clientPromise from "../../../../../lib/mongodb"; // Adjust the path as necessary
import type { NextAuthOptions } from "next-auth"; // Use this for NextAuthOptions

// Define authOptions with appropriate types
export const authOptions: NextAuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
  ],
  adapter: MongoDBAdapter(clientPromise),
  callbacks: {
    async session({ session, user }) {
      if (user) {
        session.user.id = user.id; // Add user ID to session
        // Add any other user properties if necessary
        session.user.name = user.name;
        session.user.email = user.email;
        session.user.image = user.image;
      }
      return session;
    },
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id; // Add user ID to the token
      }
      return token;
    },
  },
  pages: {
    signIn: '/auth/signin', // Custom sign-in page
  },
};

// Create a NextAuth API route
const handler = NextAuth(authOptions);

// Export GET and POST handlers for the Next.js route
export { handler as GET, handler as POST };
