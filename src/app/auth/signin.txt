'use client';

import { signIn, signOut, useSession } from "next-auth/react";
import { useRouter } from 'next/router';
import { useState } from 'react';

const SignInPage = () => {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const handleSignIn = async () => {
    setLoading(true);
    const result = await signIn("google");
    setLoading(false);
    if (result?.error) {
      console.error(result.error);
    } else {
      router.push("/"); // Redirect after sign-in
    }
  };

  const handleSignOut = async () => {
    try {
      await signOut();
    } catch (error) {
      console.error("Error signing out:", error);
    }
  };

  if (status === "loading") {
    return <p>Loading...</p>; // Loading state while checking session
  }

  return (
    <div>
      {!session ? (
        <button onClick={handleSignIn} disabled={loading}>
          {loading ? "Signing in..." : "Sign in with Google"}
        </button>
      ) : (
        <div>
          <p>Welcome, {session.user.name}!</p>
          <button onClick={handleSignOut}>Sign Out</button>
        </div>
      )}
    </div>
  );
};

export default SignInPage;
