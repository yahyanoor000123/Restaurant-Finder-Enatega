"use client";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  gql,
} from "@apollo/client";
import { useEffect, useState } from "react";
import LocationInput from "./components/LocationInput";
import axios from "axios";
import { Restaurant } from "./components/Restaurant";
import dynamic from "next/dynamic";
import { HeaderX } from "./components/HeaderX";
import { Button } from "primereact/button";
//import RestaurantGrid from "./components/RestaurantGrid";

const client = new ApolloClient({
  uri: "https://enatega-multivendor.up.railway.app/graphql",
  cache: new InMemoryCache(),
});

interface Coordinates {
  latitude: number | null;
  longitude: number | null;
}
export default function Home() {
  // const [restaurants, setRestaurants] = useState([]);
  const [error, setError] = useState<string | null>(null);
  const [fetchRestaurants, setFetchRestaurants] = useState<boolean>(false);
  const [coordinates, setCoordinates] = useState<Coordinates>({
    latitude: null,
    longitude: null,
  });

  useEffect(() => {
    if (typeof window !== "undefined" && navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        const { latitude, longitude } = position.coords;
        const coord: Coordinates = {
          latitude: latitude,
          longitude: longitude,
        };
        if (longitude != null && latitude != null) {
          setCoordinates(coord);
        } else {
          setError("No coordinates");
        }
      });
    } else {
      setError(
        "Geolocation is not supported by this browser or running on server"
      );
    }
  }, []);

  const handleFindRestaurants = () => {
    setFetchRestaurants(true);
  };
  return (
    <div>
      <HeaderX />
      <LocationInput />

      <Button
        label="Find Restaurants"
        severity="success"
        icon="pi pi-search"
        rounded
        onClick={handleFindRestaurants}
      />
      {fetchRestaurants && (
        <ApolloProvider client={client}>
          <Restaurant coors={coordinates} />
        </ApolloProvider>
      )}
      {/* <button
            onClick={handleFindRestaurants}
            className="bg-green-500 text-white px-4 py-2 rounded mt-4"
          >
            Find Restaurants
          </button> */}
      {/* {restaurants.length > 0 && <RestaurantGrid restaurants={restaurants} />} */}
    </div>
  );
}
