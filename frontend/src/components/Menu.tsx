import { House, SquareActivity, User, Settings, LogOut, LogIn } from 'lucide-react';
import Link from "next/link";
import { authOptions } from '@/lib/auth';
import { getServerSession } from 'next-auth';
import UserAccountnav from './ui/UserAccountnav';
import { buttonVariants } from './ui/button';


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
      }

    ],
  },
    {  title: "OTHER",
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

const Menu = async () => {
    const session = await getServerSession(authOptions);
  return (
    <div className="mt-4 text-sm">
        <div>
        {menuItems.map((i) => (
            <div className="flex flex-col gap-2" key={i.title}>
            <span className="hidden lg:block text-gray-400 font-light my-4">
                {i.title}
            </span>
            {i.items.map((item) => {
                const Icon = item.icon; // Assign the icon component dynamically
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
        <div className='pt-2 flex justify-center lg:justify-start'>
            <div>
                {session?.user ? (
                <UserAccountnav />
                ) : (
                <Link 
                    href='/sign-in' 
                    className="flex items-center justify-center lg:justify-start gap-4 text-gray-500 py-2 md:px-2 rounded-md hover:bg-lamaSkyLight">
                    <LogIn size={20} />
                    <span className="hidden lg:block">Sign in</span>
                </Link>
                )}
            </div>
        </div>
    </div>
  );
};

export default Menu;
