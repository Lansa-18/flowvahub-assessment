import { supabase } from "./supabase";
import type { Streak } from "./types";
import { isSameDay, startOfDay, differenceInDays } from "date-fns";

export async function claimDailyPoints(userId: string) {
  // Get the user's streak record - use maybeSingle to handle case when no record exists
  const { data: streak, error: fetchError } = await supabase
    .from("streaks")
    .select("*")
    .eq("user_id", userId)
    .maybeSingle();

  if (fetchError) {
    console.error("Error fetching streak:", fetchError);
    throw new Error("Failed to fetch streak data");
  }

  const today = new Date();
  const lastClaimed = streak?.last_claimed_at
    ? new Date(streak.last_claimed_at)
    : null;

  // Check if user has claimed today
  if (lastClaimed && isSameDay(lastClaimed, today)) {
    throw new Error("Already claimed today!");
  }

  // Calculate the new streak using day difference for more reliable comparison
  let newStreak = 0;
  if (lastClaimed) {
    const daysDifference = differenceInDays(
      startOfDay(today),
      startOfDay(lastClaimed),
    );

    console.log("Streak Debug:", {
      today: today.toISOString(),
      lastClaimed: lastClaimed.toISOString(),
      todayStartOfDay: startOfDay(today).toISOString(),
      lastClaimedStartOfDay: startOfDay(lastClaimed).toISOString(),
      daysDifference,
      currentStreak: streak?.current_streak,
    });

    if (daysDifference === 1) {
      // Claimed yesterday, continue streak
      newStreak = (streak?.current_streak || 0) + 1;
    } else {
      // Streak broken, reset to 1
      newStreak = 1;
    }
  } else {
    // First time claiming
    newStreak = 1;
  }

  console.log("New streak will be:", newStreak);

  // Update the database
  const newPoints = (streak?.total_points || 0) + 5;
  const longestStreak = Math.max(newStreak, streak?.longest_streak || 0);

  let error;

  if (streak) {
    // Update existing streak record
    const result = await supabase
      .from("streaks")
      .update({
        current_streak: newStreak,
        longest_streak: longestStreak,
        total_points: newPoints,
        last_claimed_at: today.toISOString(),
        updated_at: today.toISOString(),
      })
      .eq("user_id", userId);
    error = result.error;
  } else {
    // Insert new streak record for first-time claim
    const result = await supabase.from("streaks").insert({
      user_id: userId,
      current_streak: newStreak,
      longest_streak: longestStreak,
      total_points: newPoints,
      last_claimed_at: today.toISOString(),
      created_at: today.toISOString(),
      updated_at: today.toISOString(),
    });
    error = result.error;
  }

  if (error) {
    console.error("Error claiming daily points:", error);
    throw new Error("Failed to claim daily points");
  }

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
