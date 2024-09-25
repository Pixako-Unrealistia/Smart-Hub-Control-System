'use client';

import { signOut } from "next-auth/react";
import { Button } from "./button";

const UserAccountnav = () => {
  const authServiceUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3001";
  const handleSignOut = async () => {
    try {
      console.log('Sign out initiated');
      await signOut({
        redirect: true,
        callbackUrl: `${window.location.origin}/sign-in`, // Or use process.env.NEXTAUTH_URL
      });
      console.log('Sign out successful');
    } catch (error) {
      console.error("Sign-out failed", error);
      // Optionally, add a toast or alert to inform the user about the error.
    }
  };

  return (
    <Button onClick={handleSignOut} variant="destructive">
      Sign Out
    </Button>
  );
};

export default UserAccountnav;
