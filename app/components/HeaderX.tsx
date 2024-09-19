// components/Header.tsx
import React from "react";
import Image from "next/image";

export const HeaderX = () => {
  return (
    <header className="flex justify-between items-center p-4 bg-white shadow-md">
      <div className="flex items-center text-black font-bold text-2xl">
        <Image
          src="/logo.svg"
          alt="Enatega Logo"
          width={80}
          height={40}
          className="text-black "
          priority={false}
        />
        Enatega
      </div>
      <div className="flex items-center space-x-4">
        <button className=" bg-gray-200 text-black px-4 py-2 rounded">
          Login
        </button>
        <button className="bg-green-500 text-white px-4 py-2 rounded">
          Sign Up
        </button>
      </div>
    </header>
  );
};
