'use client';

import { House, SquareActivity, User, Settings, LogIn } from 'lucide-react';
import Link from "next/link";
import { useEffect, useState } from "react";
import UserAccountnav from './ui/UserAccountnav';

const menuItems = [
  {
    title: "MENU",
    items: [
      {
        icon: House,
        label: "Home",
        href: "/home",
      },
      {
        icon: SquareActivity,
        label: "Devices",
        href: "/devices",
      },
    ],
  },
  {
    title: "OTHER",
    items: [
      {
        icon: User,
        label: "User",
        href: "/profile",
      },
      {
        icon: Settings,
        label: "Settings",
        href: "/settings",
      },
    ],
  },
];

const Menu = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Check user status by fetching user data from the server
  useEffect(() => {
    const checkUserLoggedIn = async () => {
      try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/auth/me`, {
          method: 'GET',
          credentials: 'include',  // Ensure cookies are sent with the request
        });

        if (response.ok) {
          // User is logged in
          setIsLoggedIn(true);
        } else {
          // User is not logged in
          setIsLoggedIn(false);
        }
      } catch (error) {
        console.error('Error checking login status:', error);
        setIsLoggedIn(false);
      }
    };

    checkUserLoggedIn();
  }, []);

  return (
    <div className="mt-4 text-sm">
      <div>
        {menuItems.map((i) => (
          <div className="flex flex-col gap-2" key={i.title}>
            <span className="hidden lg:block text-gray-400 font-light my-4">
              {i.title}
            </span>
            {i.items.map((item) => {
              const Icon = item.icon; // Dynamically assign icon component
              return (
                <Link
                  href={item.href}
                  key={item.label}
                  className="flex items-center justify-center lg:justify-start gap-4 text-gray-500 py-2 md:px-2 rounded-md hover:bg-lamaSkyLight"
                >
                  <Icon size={20} /> {/* Render the lucide-react icon */}
                  <span className="hidden lg:block">{item.label}</span>
                </Link>
              );
            })}
          </div>
        ))}
      </div>

      {/* Display sign-in or sign-out button based on login status */}
      <div className="pt-2 flex justify-center lg:justify-start">
        {isLoggedIn ? (
          <UserAccountnav /> // Show UserAccountnav (Sign Out)
        ) : (
          <Link
            href="/sign-in"
            className="flex items-center justify-center lg:justify-start gap-4 text-gray-500 py-2 md:px-2 rounded-md hover:bg-lamaSkyLight"
          >
            <LogIn size={20} />
            <span className="hidden lg:block">Sign in</span>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Menu;
