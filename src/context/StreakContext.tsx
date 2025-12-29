import { createContext, useContext } from "react";
import { useGetStreakData } from "@/hooks/useGetStreakData";
import { useUser } from "@/hooks/useUser";
import { isSameDay } from "date-fns";

interface StreakProviderProps {
  children: React.ReactNode;
}

interface StreakContextProps {
  totalPoints: number;
  daysCount: number;
  hasClaimed: boolean;
}

const StreakContext = createContext<StreakContextProps | undefined>(undefined);

function StreakProvider({ children }: StreakProviderProps) {
  const { user } = useUser();
  const { data: streakData } = useGetStreakData(user?.id || "");

  // Derive values from streakData
  const totalPoints = streakData?.total_points ?? 0;
  const daysCount = streakData?.longest_streak ?? 0;

  // Check if user has claimed today
  const hasClaimed = streakData?.last_claimed_at
    ? isSameDay(new Date(streakData.last_claimed_at), new Date())
    : false;

  return (
    <StreakContext.Provider
      value={{
        totalPoints,
        daysCount,
        hasClaimed,
      }}
    >
      {children}
    </StreakContext.Provider>
  );
}

function useStreakContext() {
  const context = useContext(StreakContext);

  if (context == undefined)
    throw new Error("Context was used outside the provider.");

  return context;
}

export { StreakProvider, useStreakContext };
