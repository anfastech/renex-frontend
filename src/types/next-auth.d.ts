// types/next-auth.d.ts

import "next-auth"; // Import next-auth types to extend them

declare module "next-auth" {
  interface User {
    id: string; // Custom property for user ID
    name?: string | null;
    email?: string | null;
    image?: string | null;
  }

  interface Profile {
    picture?: string; // Include picture in Profile interface
  }

  interface Session {
    user: User; // Ensure the session has the correct User type
  }
}
