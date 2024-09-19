// app/components/Header.tsx
import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <header className="flex justify-between items-center p-4 bg-white shadow-md">
      {/* Logo */}
      <div className="flex items-center space-x-4 bg-green-400">
        <Image
          src="/logo.svg" // Make sure logo.svg is in the /public/images/ folder
          alt="Logo"
          width={40}
          height={40}
        />
        <h1 className="text-xl font-bold">ENATEGA</h1> {/* Your logo text */}
      </div>

      {/* Buttons */}
      <div className="flex items-center space-x-4">
        <Link href="/login">
          <button className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-md">
            Login
          </button>
        </Link>
        <Link href="/signup">
          <button className="px-4 py-2 text-sm text-white bg-green-500 rounded-md hover:bg-green-600">
            Sign Up
          </button>
        </Link>
      </div>
    </header>
  );
};

export default Header;
