import { getRedeemableItems } from "@/lib/utils/apiItems";
import { useQuery } from "@tanstack/react-query";

export function useGetReedeemableItems() {
  const { data: redeemableItems, isLoading } = useQuery({
    queryKey: ["items"],
    queryFn: getRedeemableItems,
  });

  return { redeemableItems, isLoading };
}
