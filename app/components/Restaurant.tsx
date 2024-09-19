import { restaurantList } from "../apollo/server";
import { useQuery } from "@apollo/client";

interface Coordinates {
  latitude: number;
  longitude: number;
}

export function Restaurant({ coors }: { coors: Coordinates }) {
  const { loading, error, data } = useQuery(restaurantList, {
    variables: {
      latitude: coors.latitude,
      longitude: coors.longitude,
    },
  });

  if (loading) return "Loading...";
  if (error) return `Error! ${error.message}`;

  return (
    <div>
      {data?.nearByRestaurants?.restaurants?.length ? (
        data.nearByRestaurants.restaurants.map((d: any) => {
          console.log(d); // For debugging, remove this in production
          return (
            <ul key={d._id}>
              {" "}
              {/* Ensure that each list item has a unique key */}
              <li>{d.name}</li>
              <li>{d.tag}</li>
            </ul>
          );
        })
      ) : (
        <p>No nearby restaurants found</p> // Handle empty or missing data
      )}
    </div>
  );
}
