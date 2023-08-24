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

// 라이브 경기를 가져온다.
export async function getLiveMatches(leagueId: number, season: number) {
  if (leagueId && season) {
    const option = {
      ...basicOpt,
      url: `${import.meta.env.VITE_FOOTBALL_API_URL}fixtures`,
      params: {
        league: leagueId,
        season: season,
        live: "all",
      },
    };

    try {
      const response = await axios.request(option);
      return response.data;
    } catch (error) {
      console.error(error);
      throw new Error("ERROR GET DATA IN GET_LIVE_MATCHES");
    }
  } else {
    throw new Error("NOT PARAMETER IN GET_LIVE_MATCHES");
  }
}

// 리그 순위를 가져온다.
export async function getLeagueRanking(leagueId: number, season: number) {
  if (leagueId && season) {
    const option = {
      ...basicOpt,
      url: `${import.meta.env.VITE_FOOTBALL_API_URL}standings`,
      params: {
        league: leagueId,
        season: season,
      },
    };

    try {
      const response = await axios.request(option);
      return response.data;
    } catch (error) {
      console.error(error);
      throw new Error("ERROR GET DATA IN GET_RANK");
    }
  } else {
    throw new Error("NOT PARAMETER IN GET_RANK");
  }
}