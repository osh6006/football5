interface Periods {
  first: number;
  second: number;
}

interface Venue {
  id: number;
  name: string;
  city: string;
}

interface Status {
  long: string;
  short: string;
  elapsed: null | number;
}

interface League {
  id: number;
  name: string;
  country: string;
  logo: string;
  flag: string;
  season: number;
  round: string;
}

interface HomeAway {
  id: number;
  name: string;
  logo: string;
  winner: boolean | null;
}

interface Team {
  home: HomeAway;
  away: HomeAway;
}

interface Goals {
  home: null | number;
  away: null | number;
}

interface Score {
  halftime: Goals;
  fulltime: Goals;
  extratime: Goals;
  penalty: Goals;
}

interface Fixture {
  id: string;
  referee: string | null;
  timezone: string;
  date: string;
  timestamp: string;
  periods: Periods;
  venue: Venue;
  status: Status;
}

export interface Match {
  fixture: Fixture;
  league: League;
  teams: Team;
  goals: Goals;
  score: Score;
}
