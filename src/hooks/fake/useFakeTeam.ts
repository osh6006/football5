import { useQuery } from "@tanstack/react-query";
import {
  getTeamInfo,
  getTeamLatestMatches,
  getTeamStat,
} from "../../api/fakeFootballAPI";
import { TeamInfo, TeamStat } from "../../type/team";

export default function useFakeTeam() {
  const teamInfoQuery = useQuery({
    queryKey: ["FakeTeamInfo"],
    queryFn: () => getTeamInfo(),
    staleTime: 1000 * 60,
    select(data): TeamInfo {
      return data;
    },
  });

  const teamStatQuery = useQuery({
    queryKey: ["FakeTeamStat"],
    queryFn: () => getTeamStat(),
    staleTime: 1000 * 60,
    select(data): TeamStat {
      return data;
    },
  });

  const teamLatestMatches = useQuery({
    queryKey: ["FakeTeamLatestMatches"],
    queryFn: () => getTeamLatestMatches(),
    staleTime: 1000 * 60,
  });

  return { teamInfoQuery, teamStatQuery, teamLatestMatches };
}
