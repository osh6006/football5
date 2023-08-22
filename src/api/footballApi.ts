import axios from "axios";

const basicOpt = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": `${import.meta.env.VITE_FOOTBALL_API_KEY}`,
    "X-RapidAPI-Host": `${import.meta.env.VITE_FOOTBALL_API_HOST}`,
  },
};

export async function getLatestMatches(leagueId: number, season: number, matches: number) {
  if (leagueId && season && matches) {
    const option = {
      ...basicOpt,
      url: `${import.meta.env.VITE_FOOTBALL_API_URL}fixtures`,
      params: {
        league: leagueId,
        season: season,
        last: matches,
      },
    };

    try {
      const response = await axios.request(option);
      return response.data;
    } catch (error) {
      console.error(error);
      throw new Error("ERROR GET DATA IN GET_LATEST_MATCHES");
    }
  } else {
    throw new Error("NOT PARAMETER IN GET_LATEST_MATCHES");
  }
}

export async function getNextMatches(leagueId: number, season: number, matches: number) {
  if (leagueId && season && matches) {
    const option = {
      ...basicOpt,
      url: `${import.meta.env.VITE_FOOTBALL_API_URL}fixtures`,
      params: {
        league: leagueId,
        season: season,
        next: matches,
      },
    };

    try {
      const response = await axios.request(option);
      return response.data;
    } catch (error) {
      console.error(error);
      throw new Error("ERROR GET DATA IN GET_NEXT_MATCHES");
    }
  } else {
    throw new Error("NOT PARAMETER IN GET_NEXT_MATCHES");
  }
}
