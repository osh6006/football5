import { useQuery } from "@tanstack/react-query";
import { getTwoNextMatches } from "../../api/fakeFootballAPI";
import { Match } from "../../type/fixtures";

export default function useFakeFixtures() {
  // const queryClient = useQueryClient();

  const fakeNextMatchesQuery = useQuery({
    queryKey: ["bannerLatestMatch"],
    queryFn: () => getTwoNextMatches(),
    staleTime: 1000 * 60,
    select(data): Match[] {
      return data;
    },
  });

  return { fakeNextMatchesQuery };
}
