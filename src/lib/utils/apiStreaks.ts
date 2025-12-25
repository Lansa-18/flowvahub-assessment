import { supabase } from "./supabase";
import type { Streak } from "./types";
import { isSameDay, isYesterday } from "date-fns";

export async function claimDailyPoints(userId: string) {
  // Get the user's streak record.
  const { data: streak }: { data: Streak | null } = await supabase
    .from("streaks")
    .select("*")
    .eq("user_id", userId)
    .single();

  const today = new Date();
  const lastClaimed = streak?.last_claimed_at
    ? new Date(streak.last_claimed_at)
    : null;

  // Check if user has claimed today
  if (lastClaimed && isSameDay(lastClaimed, today)) {
    throw new Error("Already claimed today!");
  }

  // Calculate the new streak
  let newStreak = 0;
  if (lastClaimed && isYesterday(lastClaimed)) {
    newStreak = (streak?.current_streak || 0) + 1;
  } else {
    newStreak = 1;
  }

  // Update the database
  const newPoints = (streak?.total_points || 0) + 5;
  const longestStreak = Math.max(newStreak, streak?.longest_streak || 0);

  await supabase.from("streaks").upsert({
    user_id: userId,
    current_streak: newStreak,
    longest_streak: longestStreak,
    total_points: newPoints,
    last_claimed_at: today.toISOString(),
    updated_at: today.toISOString(),
  });

  return { newStreak, newPoints };
}

export async function getStreakData(userId: string) {
  const { data, error } = await supabase
    .from("streaks")
    .select("*")
    .eq("user_id", userId)
    .maybeSingle();

  if (error) {
    console.error(error);
    throw new Error("Problem getting streak data.");
  }

  // If no streak record exists, return default values
  if (!data) {
    return {
      id: "",
      user_id: userId,
      current_streak: 0,
      longest_streak: 0,
      last_claimed_at: null,
      total_points: 0,
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
    } as Streak;
  }

  return data as Streak;
}
