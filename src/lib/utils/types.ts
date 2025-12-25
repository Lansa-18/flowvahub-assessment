export interface Streak {
  id: string;
  user_id: string;
  current_streak: number;
  longest_streak: number;
  last_claimed_at: string | null;
  total_points: number;
  created_at: string;
  updated_at: string;
}

export type RedeemStatus = "locked" | "unlocked" | "coming-soon";
export type RedeemType = "payment" | "card" | "course";

export interface RedeemableItem {
  id: number;
  title: string;
  description: string;
  type: RedeemType;
  points: number;
  status: RedeemStatus;
  icon?: string;
  created_at?: string;
  updated_at?: string;
}
