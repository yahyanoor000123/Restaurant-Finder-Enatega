// app/page.tsx
"use client";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  gql,
} from "@apollo/client";
import { useState } from "react";
import LocationInput from "./components/LocationInput";
import axios from "axios";
import { Restaurant } from "./components/Restaurant";
//import RestaurantGrid from "./components/RestaurantGrid";

const client = new ApolloClient({
  uri: "https://enatega-multivendor.up.railway.app/graphql",
  cache: new InMemoryCache(),
});

interface Coordinates {
  latitude: number;
  longitude: number;
}
export default function Home() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition((position) => {
      const { latitude, longitude } = position.coords;
      const coord: Coordinates = {
        latitude: latitude,
        longitude: longitude,
      };
      console.log(coord);

      setCoordinates(coord);
    });
  }
  const [restaurants, setRestaurants] = useState([]);
  const [coordinates, setCoordinates] = useState<Coordinates>({
    latitude: 0,
    longitude: 0,
  });

  // const handleFindRestaurants = async () => {
  //   if (navigator.geolocation) {
  //     navigator.geolocation.getCurrentPosition(async (position) => {
  //       const { latitude, longitude } = position.coords;
  //       const coordinates: Coordinates = {
  //         latitude: latitude,
  //         longitude: longitude,
  //       };
  //       setCoordinates(coordinates);
  //       // const response = await axios.post(
  //       //   `https://enatega-multivendor.up.railway.app/graphql`,
  //       //   {
  //       //     params: {
  //       //       format: "json",
  //       //       lat: latitude,
  //       //       lon: longitude,
  //       //     },
  //       //   }
  //       // /restaurants?lat=${latitude}&lon=${longitude}`
  //       // // );
  //       // const data = response;
  //       // console.log(data);

  //       // setRestaurants(data);
  //     });
  //   }
  // };

  return (
    <div className="p-8">
      <ApolloProvider client={client}>
        <Restaurant coors={coordinates} />
        {/* <LocationInput />
        <button
          onClick={handleFindRestaurants}
          className="bg-green-500 text-white px-4 py-2 rounded mt-4"
        >
          Find Restaurants
        </button> */}
        {/* {restaurants.length > 0 && <RestaurantGrid restaurants={restaurants} />} */}
      </ApolloProvider>
      ,
    </div>
  );
}
