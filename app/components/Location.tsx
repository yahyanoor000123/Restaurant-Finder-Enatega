import { Main } from "./Main";
import { useLocation } from "@/context/LocationContext";

function Location() {
  const { location, handleLocationFetch, coordinates } = useLocation();
  return (
    <div>
      <Main
        location={location}
        onShareLocation={handleLocationFetch}
        coordinates={coordinates}
      />
    </div>
  );
}

export default Location;
