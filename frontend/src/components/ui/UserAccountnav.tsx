'use client';

import { signOut } from "next-auth/react";
import { Button } from "./button";
import Link from "next/link";
import { LogIn, LogOut } from "lucide-react";

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
    <div className="">
        <Button
          onClick = {handleSignOut}
          className="flex items-center justify-center lg:justify-start gap-4 text-gray-500 py-2 md:px-2 rounded-md hover:bg-lamaSkyLight bg-transparent">
          <LogOut size={20} />
          <span className="hidden lg:block">Sign out</span>
        </Button>
    </div>
  );
};

export default UserAccountnav;

