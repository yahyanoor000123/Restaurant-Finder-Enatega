"use client";
import { ApolloProvider } from "@apollo/client";
import { client } from "./apollo/index";
import Location from "./components/Location";
import { Header } from "./components/Header";
import { LocationProvider } from "@/context/LocationContext";

export default function Home() {
  return (
    <div>
      <ApolloProvider client={client}>
        <LocationProvider>
          <Header />
          <Location />
        </LocationProvider>
      </ApolloProvider>
    </div>
  );
}
