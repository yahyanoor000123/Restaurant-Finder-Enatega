import { restaurantList } from "../apollo/queries";
import { useLazyQuery } from "@apollo/client";
import { Card } from "primereact/card";
import { Coordinates } from "../utils/interfaces";
import { useEffect } from "react";
import Image from "next/image";

export function Restaurant({ coors }: { coors: Coordinates }) {
  const [getRestaurants, { data }] = useLazyQuery(restaurantList);

  useEffect(() => {
    if (coors.longitude && coors.latitude) {
      getRestaurants({
        variables: {
          longitude: coors.longitude,
          latitude: coors.latitude,
        },
      });
    }
  }, [coors, getRestaurants]);

  console.log(data);

  return (
    <div className="grid grid-rows-2 sm:grid-cols-2 gap-2">
      {data?.nearByRestaurants?.restaurants.map((restaurant: any) => (
        <div key={restaurant._id} className="p-col-12 p-md-4 p-lg-3">
          <Card title={restaurant.name} className="p-mb-3 text-center">
            <Image
              src={restaurant.image}
              alt={restaurant.name}
              className="mx-auto p-mb-2"
              width={400}
              height={150}
              // style={{ width: "400px", height: "150px", objectFit: "cover" }}
            />
            <p>{restaurant.description}</p>
          </Card>
        </div>
      ))}
    </div>
  );
}
