import { getCurrentUser } from "@/lib/utils/apiAuth";
import { useQuery } from "@tanstack/react-query";

export function useUser() {
  const { isLoading, data: user } = useQuery({
    queryKey: ["user"],
    queryFn: getCurrentUser,
    retry: false,
    staleTime: Infinity, // Don't refetch automatically
    refetchOnMount: false, // Don't refetch on component mount
    refetchOnWindowFocus: false, // Don't refetch on window focus
  });

  return { isLoading, user, isAuthenticated: !!user };
}
