import { Main } from "./Main";
import { useLocation } from "@/context/LocationContext";

function Location() {
  const { location, handleLocationFetch, coordinates } = useLocation();
  return (
    <div className="bg-gray-600">
      <Main
        location={location}
        onShareLocation={handleLocationFetch}
        coordinates={coordinates}
      />
    </div>
  );
}

export default Location;
