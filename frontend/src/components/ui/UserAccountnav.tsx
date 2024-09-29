'use client';

import { Button } from "./button";
import Link from "next/link";
import { LogOut } from "lucide-react";
import { useRouter } from "next/navigation";

const UserAccountNav = () => {
  const router = useRouter();
  const authServiceUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3001";

  const handleSignOut = async () => {
    try {
      console.log('Sign out initiated');
      
      // Call the backend to clear the cookie
      const response = await fetch(`${authServiceUrl}/api/auth/logout`, {
        method: 'POST',
        credentials: 'include',  // Ensure cookies are sent with the request
      });
      
      if (response.ok) {
        console.log('Sign out successful');
        // Redirect to sign-in page
        router.push('/sign-in');
      } else {
        console.error('Failed to log out:', response.statusText);
      }
    } catch (error) {
      console.error('Sign-out failed', error);
    }
  };

  return (
    <div className="">
      <Button
        onClick={handleSignOut}
        className="flex items-center justify-center lg:justify-start gap-4 text-gray-500 py-2 md:px-2 rounded-md hover:bg-lamaSkyLight bg-transparent"
      >
        <LogOut size={20} />
        <span className="hidden lg:block">Sign out</span>
      </Button>
    </div>
  );
};

export default UserAccountNav;
