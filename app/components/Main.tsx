import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
import { Restaurant } from "./Restaurant";
import { MainProps } from "../utils/interfaces";
import { useState } from "react";

export function Main({ location, onShareLocation, coordinates }: MainProps) {
  const [showRestaurants, setShowRestaurants] = useState(false);

  const handleShowRestaurants = () => {
    if (coordinates.latitude && coordinates.longitude) {
      setShowRestaurants(true);
    } else {
      console.log("Coordinates are not available.");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <div className="flex items-center bg-black my-20 p-4 rounded-lg shadow-lg w-full max-w-4xl">
        <div className="flex items-center bg-white rounded-lg px-4 py-2 w-full ">
          <i className="pi pi-map-marker mr-2 text-gray-600"></i>{" "}
          <InputText
            value={location || "Enter Delivery Address"}
            placeholder="Enter Delivery Address"
            className="w-full border-none focus:outline-none"
          />
          <Button
            icon="pi pi-expand"
            label="Share Location"
            className="flex justify-center items-center text-base py-2 px-6 mx-2 rounded-lg whitespace-nowrap focus:outline-none"
            onClick={onShareLocation}
          />
        </div>

        {/* Find Restaurants Button */}
        <Button
          label="Find Restaurants"
          className="bg-green-500 rounded-full text-base flex items-center justify-center px-10 py-2 mx-3 whitespace-nowrap focus:outline-none"
          onClick={handleShowRestaurants} // Pass coordinates when clicked
        />
      </div>
      {showRestaurants && (
        <div className="mt-2">
          {/* Conditionally render the Restaurant component */}
          <Restaurant coors={coordinates} />
        </div>
      )}
    </div>
  );
}
