interface Team {
  id: number;
  name: string;
  code: string;
  country: string;
  founded: number;
  national: false;
  logo: string;
}

interface Venue {
  id: number;
  name: string;
  address: string;
  city: string;
  capacity: number;
  surface: string;
  image: string;
}

export interface TeamInfo {
  team: Team;
  venue: Venue;
}
