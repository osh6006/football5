import axios from "axios";

const basicOpt = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": `${import.meta.env.VITE_FOOTBALL_API_KEY}`,
    "X-RapidAPI-Host": `${import.meta.env.VITE_FOOTBALL_API_HOST}`,
  },
};

// 최근 경기를 가져온다.
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

// 다음 경기를 가져온다.
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

// 각 분야별 탑 플레이어들을 가져온다.
export async function getTopPlayer(leagueId: number, season: number, type: string) {
  if (leagueId && season && type) {
    const option = {
      ...basicOpt,
      url: `${import.meta.env.VITE_FOOTBALL_API_URL}players/${type}`,
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
      throw new Error("ERROR GET DATA IN GET_TOP_PLAYER");
    }
  } else {
    throw new Error("NOT PARAMETER IN GET_TOP_PLAYER");
  }
}

// 리그 스케쥴을 가져온다.
export async function getLeagueSchedule(leagueId: number, season: number, start: string, end: string) {
  if (season && leagueId && start && end) {
    const option = {
      ...basicOpt,
      url: `${import.meta.env.VITE_FOOTBALL_API_URL}fixtures`,
      params: {
        league: leagueId,
        season: season,
        from: start,
        to: end,
        timezone: "Asia/Seoul",
      },
    };

    try {
      const response = await axios.request(option);
      return response.data.response;
    } catch (error) {
      console.error(error);
    }
  } else {
    throw new Error("NOT PARAMETER IN GET_LEAGUE_SCHEDULE");
  }
}

// 라이브 스코어 데이터를 가져온다.
export async function getLiveScore(fixturesId: string) {
  if (fixturesId) {
    const option = {
      ...basicOpt,
      url: `${import.meta.env.VITE_FOOTBALL_API_URL}fixtures`,
      params: {
        id: fixturesId,
      },
    };

    try {
      const response = await axios.request(option);
      return response.data.response;
    } catch (error) {
      console.error(error);
    }
  } else {
    throw new Error("NOT PARAMETER IN GET_LEAGUE_SCHEDULE");
  }
}
