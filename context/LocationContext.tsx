import React, { createContext, useState, useContext } from "react";
import axios from "axios";
import { Coordinates } from "@/app/utils/interfaces";

// Create the context
const LocationContext = createContext<any>(null);

// Create a provider component
export const LocationProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [location, setLocation] = useState("");
  const [coordinates, setCoordinates] = useState<Coordinates>({
    latitude: null,
    longitude: null,
  });
  const handleLocationFetch = async () => {
    if (typeof window !== "undefined" && navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(async (position) => {
        const { latitude, longitude } = position.coords;
        const response = await axios.get(
          `https://nominatim.openstreetmap.org/reverse`,
          {
            params: {
              format: "json",
              lat: latitude,
              lon: longitude,
            },
          }
        );
        const data = response.data;
        if (response.status == 200) {
          let address = data.display_name
            .split(",")
            .filter((part: string) => !/\d{5,}/.test(part)) // Removes parts with 5 or more digits
            .join(",");

          setLocation(address); // Update the location
          setCoordinates({ latitude, longitude });
        } else {
          console.log("Geolocation not supported or running on the server");
        }
      });
    }
  };

  return (
    <LocationContext.Provider
      value={{ location, handleLocationFetch, coordinates }}
    >
      {children}
    </LocationContext.Provider>
  );
};

// Custom hook to use the location context
export const useLocation = () => {
  return useContext(LocationContext);
};
