'use client'

import { useSession } from 'next-auth/react';

export default function Page() {
  const { data: session, status } = useSession();

  if (status === "loading") {
    return (
      <div className="bg-gray-900 h-screen w-screen flex justify-center items-center text-2xl">
        Loading...
      </div>
    );
  }

  if (status === "unauthenticated") {
    return (
      <div className="bg-gray-900 h-screen w-screen flex justify-center items-center text-2xl">
        Not logged in
      </div>
    );
  }

  return (
    <div className="bg-gray-900 h-screen w-screen flex justify-center items-center">
      <div className="border-2 rounded-xl p-8 flex flex-col items-center justify-center">
        <h1 className="text-xl">Hi {session?.user?.name}</h1>
        <p className="text-xl">
          You are registered with the email – {session?.user?.email}
        </p>
      </div>
    </div>
  );
}
