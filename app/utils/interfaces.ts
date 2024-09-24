export interface Coordinates {
  latitude: number | null;
  longitude: number | null;
}

export interface RestaurantInterface {
  _id: string;
  name: string;
  image: string;
  slug: string;
  address: string;
  location: location;
  deliveryTime: number;
  minimumOrder: number;
  tax: number;
  reviewData: reviewData;
  categories: categories[];
  rating: number | null;
  isAvailable: boolean;
  openingTimes: openingTimes;
}
export interface location {
  coordinates: number[];
}

export interface reviewData {
  total: number;
  ratings: number;
  reviews: reviews[];
}

export interface reviews {
  _id: string;
  __typename: string;
}
export interface categories {
  _id: string;
  title: string;
  foods: foods[];
}

export interface foods {
  _id: string;
  title: string;
}

export interface times {
  startTime: string[];
  endTime: string[];
}

export interface openingTimes {
  day: string;
  times: times[];
}
