import { claimDailyPoints } from "@/lib/utils/apiStreaks";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export function useClaimDailyPoints(onSuccessCallback?: () => void) {
  const queryClient = useQueryClient();
  const { mutate: claimPoints, isPending } = useMutation({
    mutationFn: claimDailyPoints,

    onSuccess: () => {
      // Invalidate and refetch streak data
      queryClient.invalidateQueries({ queryKey: ["streaks"] });
      // Trigger callback (to show modal)
      onSuccessCallback?.();
    },
  });

  return { claimPoints, isPending };
}
