import Link from 'next/link';
import { Button, buttonVariants } from './ui/button';
import { authOptions } from '@/lib/auth';
import { getServerSession } from 'next-auth';
import UserAccountnav from './ui/UserAccountnav';
import { CircleUser } from 'lucide-react';

const Navbar = async () => {
  const session = await getServerSession(authOptions);

  return (
    <div className=' flex items-center justify-between p-4'>
      <div className='container flex justify-end'>
        <CircleUser color="#9ca3af" size={40} strokeWidth={2} />
      </div>
    </div>
  );
};

export default Navbar;
