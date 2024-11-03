// types/next-auth.d.ts

declare module "next-auth" {
  interface User {
    id: string; // Add the ID property here
    name?: string | null;
    email?: string | null;
    image?: string | null;
  }

  interface Profile {
    picture?: string; // Include picture in Profile interface
  }

  interface Session {
    id: string;
    user: {
      id: string; // Ensure the session has the user ID
      name?: string | null;
      email?: string | null; 
      image?: string | null; // This will store the user's profile picture
    };
  }
}
