import { Player } from "./player";

interface Team {
  id: number;
  name: string;
  logo: string;
}

interface Career {
  team: Team;
  start: null | string;
  end: null | string;
}

export interface Coach extends Player {
  career: Career[];
}
