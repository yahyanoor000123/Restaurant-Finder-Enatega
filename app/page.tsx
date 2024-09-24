"use client";
import { ApolloProvider } from "@apollo/client";
import { client } from "./apollo/index";
import { Main } from "./components/Main";
import { Header } from "./components/Header";
import { LocationProvider } from "@/context/LocationContext";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div>
      <ApolloProvider client={client}>
        <LocationProvider>
          <Header />
          <Main />
          <Footer />
        </LocationProvider>
      </ApolloProvider>
    </div>
  );
}
