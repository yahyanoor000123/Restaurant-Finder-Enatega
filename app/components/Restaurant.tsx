import { restaurantList } from "../apollo/server";
import { useQuery } from "@apollo/client";
import { Card } from "primereact/card";
interface Coordinates {
  latitude: Number | null;
  longitude: Number | null;
}

export function Restaurant({ coors }: { coors: Coordinates }) {
  console.log("I am now here ");
  const { loading, error, data } = useQuery(restaurantList, {
    variables: {
      latitude: coors.latitude,
      longitude: coors.longitude,
    },
    skip: !coors.longitude || !coors.longitude,
  });

  if (loading) return "Loading...";
  if (error) return `Error! ${error.message}`;

  return (
    <div className="grid grid-cols-3 sm:grid-cols-2 gap-2">
      {data?.nearByRestaurants?.restaurants.map((restaurant: any) => (
        <div key={restaurant._id} className="p-col-12 p-md-4 p-lg-3">
          <Card title={restaurant.name} className="p-mb-3 text-center ">
            <img
              src={restaurant.image}
              alt={restaurant.name}
              className="mx-auto p-mb-2"
              style={{ width: "400px", height: "150px", objectFit: "cover" }}
            />
            <p>{restaurant.description}</p>
            {/* Add more restaurant details here */}
          </Card>
        </div>
      ))}
    </div>
  );
}
