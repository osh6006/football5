import { useQuery } from "@tanstack/react-query";
import { getPlayerDetailResult, getTopScorer } from "../../api/fakeFootballAPI";
import { Players } from "../../type/player";

export default function useFakePlayer() {
  const topScorerQuery = useQuery({
    queryKey: ["FakeScorer"],
    queryFn: () => getTopScorer(),
    staleTime: 1000 * 60,
    select(data): Players[] {
      return data;
    },
  });

  const playerDetailQuery = useQuery({
    queryKey: ["PlayerDetail"],
    queryFn: () => getPlayerDetailResult(),
    staleTime: 1000 * 60,
    select(data): Players[] {
      return data;
    },
  });

  return { topScorerQuery, playerDetailQuery };
}
