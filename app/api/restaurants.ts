// const fetchRestaurants = async (lat: number, lon: number) => {
//   const response = await fetch(`/api/restaurants?lat=${lat}&lon=${lon}`);
//   const data = await response.json();
//   return data;
// };

// const handleFindRestaurants = async () => {
//   if (navigator.geolocation) {
//     navigator.geolocation.getCurrentPosition(async (position) => {
//       const { latitude, longitude } = position.coords;
//       const restaurants = await fetchRestaurants(latitude, longitude);
//       // Display restaurants in grid format
//     });
//   }
// };

// app/api/restaurants.ts
import { NextResponse } from "next/server";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const lat = searchParams.get("lat");
  const lon = searchParams.get("lon");

  const sampleRestaurants = [
    {
      name: "Restaurant A",
      description: "Delicious food",
      imageUrl: "/images/restaurant1.jpg",
    },
    {
      name: "Restaurant B",
      description: "Great ambiance",
      imageUrl: "/images/restaurant2.jpg",
    },
    // Add more sample data
  ];

  return NextResponse.json(sampleRestaurants);
}
