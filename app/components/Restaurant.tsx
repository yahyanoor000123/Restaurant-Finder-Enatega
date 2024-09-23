import { restaurantList } from "../apollo/queries";
import { useLazyQuery } from "@apollo/client";
import { Card } from "primereact/card";
import { RestaurantInterface, Coordinates } from "../utils/interfaces";
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
    <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-2 gap-4 mt-4 mb-8">
      {data?.nearByRestaurants?.restaurants.map(
        (restaurant: RestaurantInterface) => (
          <Card
            key={restaurant._id}
            title={restaurant.name}
            className="p-3 text-center rounded-3xl bg-green-300"
          >
            <Image
              src={restaurant.image}
              alt={restaurant.name}
              className="mx-auto mb-8 rounded-2xl"
              width={150}
              height={150}
              style={{ height: "200px", width: "400px", objectFit: "cover" }}
            />
            <i className="pi pi-star-fill mr-2 text-green-900 font-bold mx-4"></i>
            <span className="font-extrabold">
              {restaurant.reviewData.ratings}
            </span>{" "}
            /5 ({restaurant.reviewData.total})
            <p className="font-bold text-center	">
              {restaurant.deliveryTime} Minutes
            </p>
          </Card>
        )
      )}
    </div>
  );
}
