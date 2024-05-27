'use client';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navLinks = [
  {
    href: '/',
    label: 'Home',
  },
  {
    href: '/posts',
    label: 'Posts',
  },
];

const Header = () => {
  const pathname = usePathname();
  return (
    <header className='w-full px-7 py-4 border-b flex justify-between'>
      <Link href={'/'}>
        <Image
          src='https://bytegrad.com/course-assets/youtube/example-logo.png'
          alt='Logo'
          title='Logo'
          width={'35'}
          height={'35'}
          className='w-[35px] h-[35px]'
        />
      </Link>
      <nav>
        <ul className='flex gap-x-5 text-sm'>
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={`transition-all duration-200 ${
                  pathname === link.href
                    ? 'text-zinc-900'
                    : 'text-zinc-400 hover:text-zinc-600 '
                }`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
