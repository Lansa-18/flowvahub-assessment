import { claimDailyPoints } from "@/lib/utils/apiStreaks";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export function useClaimDailyPoints(onSuccessCallback?: () => void) {
  const queryClient = useQueryClient();
  const { mutate: claimPoints, isPending } = useMutation({
    mutationFn: claimDailyPoints,

    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["streaks"], exact: false });
      onSuccessCallback?.();
    },
  });

  return { claimPoints, isPending };
}
