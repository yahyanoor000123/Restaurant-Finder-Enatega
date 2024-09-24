import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
import { Restaurant } from "./Restaurant";
import { useState } from "react";
import { useLocation } from "@/context/LocationContext";

export const Main = () => {
  const [showRestaurants, setShowRestaurants] = useState(false);

  const { location, LocationFetch, coordinates } = useLocation();
  const handleShowRestaurants = () => {
    console.log("I am a coordinate:  ", coordinates);
    LocationFetch();
    setShowRestaurants(true);
  };

  return (
    <div className="flex flex-col items-center justify-start min-h-screen bg-gray-100">
      {/* Input and Button */}
      <div className="flex flex-col sm:flex-row items-center bg-black my-20 p-4 rounded-lg shadow-lg w-full max-w-4xl">
        <div className="flex items-center bg-white rounded-lg px-4 py-2 w-full">
          <i className="pi pi-map-marker mr-2 text-gray-600"></i>
          <InputText
            value={location || "Enter Delivery Address"}
            placeholder="Enter Delivery Address"
            className="w-full border-none focus:outline-none"
          />
          <Button
            icon="pi pi-expand"
            label="Share Location"
            className="flex justify-center items-center text-base py-2 px-6 mx-2 rounded-lg whitespace-nowrap"
            onClick={LocationFetch}
          />
        </div>

        <Button
          label="Find Restaurants"
          className="bg-green-500 rounded-full text-base flex items-center justify-center px-10 py-2 mx-3 mt-2 whitespace-nowrap focus:outline-none"
          onClick={handleShowRestaurants}
        />
      </div>

      {/* Restaurant Grid */}
      {showRestaurants && coordinates.longitude && coordinates.latitude && (
        <div className="w-full max-w-4xl">
          <Restaurant coors={coordinates} />
        </div>
      )}
    </div>
  );
};
