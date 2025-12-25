import { getStreakData } from "@/lib/utils/apiStreaks";
import { useQuery } from "@tanstack/react-query";

export function useGetStreakData(userId: string) {
  const { data, isLoading, error } = useQuery({
    queryKey: ["streaks", userId],
    queryFn: () => getStreakData(userId),
    enabled: !!userId, // Only run query if userId exists
  });

  return { data, isLoading, error };
}
