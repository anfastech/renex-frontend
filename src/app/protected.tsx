// app/protected.tsx
'use client';

import { useSession } from "next-auth/react";
import { useEffect } from "react";
import { useRouter } from "next/router";

const ProtectedPage = () => {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === "loading") return; // Do not redirect while loading
    if (!session) router.push("/auth/signin"); // Redirect to sign-in if not authenticated
  }, [session, status, router]);

  return (
    <div>
      {session && <h1>Protected Content for {session.user.name}</h1>}
    </div>
  );
};

export default ProtectedPage;
