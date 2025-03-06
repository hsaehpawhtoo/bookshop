'use client';

import { signOut } from 'next-auth/react';
import React from 'react';

export default function LogoutButton() {
  const handleLogout = () => {
    console.log("Attempting logout...");
    signOut({
      redirect: true,
      callbackUrl: process.env.NEXTAUTH_URL, // Ensure this is correct
    }).then(() => {
      console.log("Successfully logged out.");
    }).catch((err) => {
      console.error("Logout error:", err);
    });
  };

  return (
    <button onClick={handleLogout} className="bg-red-600 text-white p-2 rounded-md ml-auto">
      Log out
    </button>
  );
}