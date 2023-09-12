import { useQueries, useQuery } from "@tanstack/react-query";
import {
  getLeagueRanking,
  getTeamInfo,
  getTeamLatestMatches,
  getTeamStat,
} from "../api/footballApi";
import { Standings } from "../type/standings";
import { TeamInfo, TeamStat } from "../type/team";
import { Match } from "../type/fixtures";

function useTeam(leagueId?: number, season?: number, teamId?: string) {
  const teamRankQuery = useQuery({
    queryKey: ["teamRank", leagueId, season],
    queryFn: () => getLeagueRanking(leagueId, season),
    enabled: !!leagueId && !!season,
    staleTime: 1000 * 60,
    select(data): Standings[] {
      return data.response;
    },
  });

  const teamInfoQuery = useQuery({
    queryKey: ["teamInfo", teamId],
    queryFn: () => getTeamInfo(teamId),
    enabled: !!teamId,
    staleTime: 1000 * 60,
    select(data): TeamInfo {
      return data;
    },
  });

  const teamStatQuery = useQuery({
    queryKey: ["teamStat", leagueId, teamId, season],
    queryFn: () => getTeamStat(leagueId, teamId, season),
    enabled: !!leagueId && !!season && !!teamId,
    staleTime: 1000 * 60,
    select(data): TeamStat {
      return data;
    },
  });

  const teamLatestMatches = useQuery({
    queryKey: ["teamLatestMatches", teamId, season],
    queryFn: () => getTeamLatestMatches(teamId, season),
    enabled: !!teamId && !!season,
    staleTime: 1000 * 60,
    select(data): Match[] {
      return data;
    },
  });
  return { teamRankQuery, teamInfoQuery, teamStatQuery, teamLatestMatches };
}

export default useTeam;
