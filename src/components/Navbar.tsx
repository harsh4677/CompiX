import Image from 'next/image';
import Link from 'next/link';


const Navbar = () => {
  return (
    <nav className="flex-between fixed z-50 w-full bg-gray-500 px-6 py-4 lg:px-10">
      <Link href="/" className="flex items-center gap-1">
        <Image
          src="/Icons/logo.svg"
          width={32}
          height={32}
          alt="yoom logo"
          className="max-sm:size-10"
        />
      </Link>
    </nav>
  );
};

export default Navbar;
