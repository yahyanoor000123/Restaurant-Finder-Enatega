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
  });

  if (loading) return "Loading...";
  if (error) return `Error! ${error.message}`;

  return (
    <div className="p-grid">
      {data?.nearByRestaurants?.restaurants.map((restaurant: any) => (
        <div key={restaurant.id} className="p-col-12 p-md-4 p-lg-3">
          <Card title={restaurant.name} className="p-mb-3">
            <img
              src={restaurant.image}
              alt={restaurant.name}
              className="p-mb-2"
              style={{ width: "100%", height: "150px", objectFit: "cover" }}
            />
            <p>{restaurant.description}</p>
            {/* Add more restaurant details here */}
          </Card>
        </div>
      ))}
    </div>
    // <div>
    //   <main className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-full max-w-4xl">
    //     {data?.nearByRestaurants?.restaurants?.length ? (
    //       data.nearByRestaurants.restaurants.map((d: any) => {
    //         console.log(d); // For debugging, remove this in production
    //         return (
    //           <div
    //             key={d._id}
    //             className="bg-white p-4 shadow-md rounded-md flex flex-col items-center justify-center"
    //           >
    //             {" "}
    //             {/* Ensure that each list item has a unique key */}
    //             <h2 className="text-lg font-bold">{d.name}</h2>
    //             <h2 className="text-lg font-bold">{d.tag}</h2>
    //           </div>
    //         );
    //       })
    //     ) : (
    //       <p>No nearby restaurants found</p> // Handle empty or missing data
    //     )}
    //   </main>
    // </div>
  );
}
