// components/LocationInput.tsx
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import { Dropdown } from "primereact/dropdown";
import { useEffect, useState } from "react";
import axios from "axios";

import { Restaurant } from "./Restaurant";

const LocationInput = () => {
  const [location, setLocation] = useState("");
  const [dropdownValue, setDropdownValue] = useState("");

  const handleLocationFetch = () => {
    if (navigator.geolocation) {
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
        console.log(data);
        if (response.status == 200) {
          let address = response.data.display_name
            .split(",")
            .filter((part: string) => !/\d{5,}/.test(part)) // Removes parts with 5 or more digits
            .join(",");
          console.log(response.data);
          setLocation(address); //`Lat: ${latitude}, Lon: ${longitude}`

          // Update dropdown value with address
          setDropdownValue(address); // `${latitude}, ${longitude}`
        }
      });
    }
  };

  // const response_graphql = await axios.post(
  //   `https://enatega-multivendor.up.railway.app/graphql`,
  //   {
  //     query: query,
  //     variables: {
  //       latitude: latitude,
  //       longitude: longitude,
  //     },
  //   }
  //   {
  //     headers: {
  //       Accept: "*/*",
  //       "Accept-Language": "en-US,en;q=0.9",
  //       "Content-Type": "application/json",
  //       Referer: "https://multivendor.enatega.com/",
  //       "Referrer-Policy": "strict-origin-when-cross-origin",
  //       // Include other headers if necessary, such as authorization headers
  //     },
  //   }

  //restaurants?lat=${latitude}&lon=${longitude}`

  return (
    <div className="flex flex-col items-center space-y-4">
      <InputText
        value={location}
        onChange={(e) => setLocation(e.target.value)}
        placeholder="Enter Delivery Address"
        className="w-full p-2"
      />
      <Button
        label="Share Location"
        icon="pi pi-map-marker"
        onClick={handleLocationFetch}
      />
      <Dropdown
        value={dropdownValue}
        options={[{ label: location, value: location }]}
        onChange={(e) => setDropdownValue(e.value)}
      />
    </div>
  );
};

export default LocationInput;
