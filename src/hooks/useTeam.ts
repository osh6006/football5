import { useQueries, useQuery } from "@tanstack/react-query";
import { getLeagueRanking } from "../api/footballApi";
import { Standings } from "../type/standings";

function useTeam(leagueId?: number, season?: number) {
  const teamRankQuery = useQuery({
    queryKey: ["teamRank", leagueId, season],
    queryFn: () => getLeagueRanking(leagueId, season),
    enabled: !!leagueId && !!season,
    staleTime: 1000 * 60,
    select(data): Standings[] {
      return data.response;
    },
  });
  return { teamRankQuery };

  const results = useQueries({
    queries: [
      // { queryKey: ["post", 1], queryFn: fetchPost, staleTime: Infinity },
      // { queryKey: ["post", 2], queryFn: fetchPost, staleTime: Infinity },
    ],
  });
}

export default useTeam;
