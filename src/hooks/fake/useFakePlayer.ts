import { useQuery } from "@tanstack/react-query";
import { getTopScorer } from "../../api/fakeFootballAPI";
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

  return { topScorerQuery };
}
