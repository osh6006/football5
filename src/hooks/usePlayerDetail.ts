import { useQuery } from "@tanstack/react-query";
import { getPlayerDetail, getPlayerTrophies } from "../api/footballApi";
import { Players } from "../type/player";

export default function usePlayerDetail(playerId: number, season: number) {
  const playerDetailQuery = useQuery({
    queryKey: ["playerDetail", playerId, season],
    queryFn: () => getPlayerDetail(playerId, season),
    enabled: !!playerId && !!season,
    staleTime: 1000 * 60,
    select(data): Players[] {
      return data;
    },
  });

  const playerTrophieQuery = useQuery({
    queryKey: ["playerTrophie", playerId],
    queryFn: () => getPlayerTrophies(playerId),
    enabled: !!playerId,
    staleTime: 1000 * 60,
    select(data) {
      return data.response;
    },
  });

  return { playerDetailQuery, playerTrophieQuery };
}
