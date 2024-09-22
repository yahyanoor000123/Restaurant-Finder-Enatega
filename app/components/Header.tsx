import React from "react";
import Image from "next/image";
import { Button } from "primereact/button";
import { Dropdown } from "primereact/dropdown";
import { useLocation } from "@/context/LocationContext";

export const Header = () => {
  const { location } = useLocation(); // Get location from context
  return (
    <header className="flex flex-col md:flex-row justify-between items-center p-4 bg-white shadow-md w-full">
      <div className="flex items-center text-black font-bold text-2xl mb-4 md:mb-0 mx-10">
        <Image
          src="/logo.svg"
          alt="Enatega Logo"
          width={40}
          height={20}
          className="text-black"
          priority={false}
        />
        <span className="mx-2 text-3xl">ENATEGA</span>
      </div>
      <div className="mx-4 whitespace-nowrap">
        <i className="pi pi-map-marker mr-2 text-gray-600"></i>{" "}
        <Dropdown
          value={location} // Pass the current location value here
          placeholder="Select Location"
          options={[
            { label: location, value: location }, // Populate dropdown with location
          ]}
          className="w-full border-none focus:outline-none"
        />
      </div>
      <div className="flex items-center space-x-4 mx-10">
        <Button
          label="Login"
          className="border-black border-2 border-solid bg-gray-100 flex items-center text-base px-7 py-3 rounded-full whitespace-nowrap hover:bg-gray-300 transition"
        />
        <Button
          label="Sign Up"
          className="border-black border-2 border-solid bg-green-400 flex items-center text-base px-7 py-3 rounded-full whitespace-nowrap hover:bg-green-500 transition"
        />
        <i
          className="pi pi-shopping-bag mr-6 text-black-800"
          style={{ fontSize: "1.5rem" }}
        ></i>
      </div>
    </header>
  );
};
