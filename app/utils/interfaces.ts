export interface Coordinates {
  latitude: number | null;
  longitude: number | null;
}

export interface MainProps {
  location: string;
  onShareLocation: () => void;
  coordinates: Coordinates;
}
