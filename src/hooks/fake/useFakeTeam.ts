import { useQueries, useQuery } from "@tanstack/react-query";
import React from "react";
import { getTeamInfo, getTeamStat } from "../../api/fakeFootballAPI";
import { TeamInfo } from "../../type/team";

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
    queryKey: ["FakeTeamInfo"],
    queryFn: () => getTeamStat(),
    staleTime: 1000 * 60,
    select(data) {
      return data;
    },
  });

  return { teamInfoQuery, teamStatQuery };
}
