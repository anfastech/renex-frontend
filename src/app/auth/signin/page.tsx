'use client';

import { signIn, signOut, useSession } from "next-auth/react";
import { useRouter } from 'next/navigation';

const SignInPage = () => {
  const { data: session } = useSession();
  const router = useRouter();

  const handleSignIn = async () => {
    const result = await signIn("google");
    if (result?.error) {
      console.error(result.error);
    } else {
      router.push("/"); // Redirect after sign-in
    }
  };

  const handleSignOut = () => {
    signOut();
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-center mb-6">Welcome to ReNex</h2>
        {!session ? (
          <div className="text-center">
            <p className="mb-4 text-gray-700">Please sign in to continue.</p>
            <button 
              onClick={handleSignIn} 
              className="w-full p-3 text-white bg-blue-500 rounded-lg hover:bg-blue-600 transition duration-200"
            >
              Sign in with Google
            </button>
          </div>
        ) : (
          <div className="text-center">
            <p className="mb-4 text-gray-700">Welcome, {session.user.name}!</p>
            <button 
              onClick={handleSignOut} 
              className="w-full p-3 text-white bg-red-500 rounded-lg hover:bg-red-600 transition duration-200"
            >
              Sign Out
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default SignInPage;
