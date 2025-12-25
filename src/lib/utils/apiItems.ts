import { supabase } from "./supabase";
import type { RedeemableItem } from "./types";

export async function getRedeemableItems(): Promise<RedeemableItem[]> {
  const { data, error } = await supabase
    .from("redeemable_items")
    .select("*")
    .order("points", { ascending: true });

  if (error) throw new Error("There was a problem getting the items");

  return data || [];
}
