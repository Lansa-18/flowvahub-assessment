import { useState } from "react";
import SectionTag from "./SectionTag";
import RewardCard from "./RewardCard";
import Spinner from "./Spinner";
import type { RedeemableItem } from "@/lib/utils/types";

interface RedeemSectionProps {
  items: RedeemableItem[] | undefined;
  userPoints: number;
  isLoading: boolean;
}

type FilterTab = "all" | "unlocked" | "locked" | "coming-soon";

export default function RedeemSection({
  items,
  userPoints,
  isLoading,
}: RedeemSectionProps) {
  const [activeFilter, setActiveFilter] = useState<FilterTab>("all");
  const getFilteredItems = (): RedeemableItem[] => {
    if (!items) return [];
    if (activeFilter === "all") return items;

    if (activeFilter === "unlocked") {
      return items.filter(
        (item) =>
          item.status === "unlocked" ||
          (item.status === "locked" && userPoints >= item.points),
      );
    }

    if (activeFilter === "locked") {
      return items.filter(
        (item) => item.status === "locked" && userPoints < item.points,
      );
    }

    if (activeFilter === "coming-soon") {
      return items.filter((item) => item.status === "coming-soon");
    }

    return items;
  };

  const filteredItems = getFilteredItems();

  const getCount = (filter: FilterTab): number => {
    if (!items) return 0;
    if (filter === "all") return items.length;
    if (filter === "unlocked") {
      return items.filter(
        (item) =>
          item.status === "unlocked" ||
          (item.status === "locked" && userPoints >= item.points),
      ).length;
    }
    if (filter === "locked") {
      return items.filter(
        (item) => item.status === "locked" && userPoints < item.points,
      ).length;
    }
    if (filter === "coming-soon") {
      return items.filter((item) => item.status === "coming-soon").length;
    }
    return 0;
  };

  const filterTabs: { id: FilterTab; label: string }[] = [
    { id: "all", label: "All Rewards" },
    { id: "unlocked", label: "Unlocked" },
    { id: "locked", label: "Locked" },
    { id: "coming-soon", label: "Coming Soon" },
  ];

  if (isLoading) {
    return (
      <div className="mb-8">
        <SectionTag title="Redeem Your Points" />
        <div className="flex items-center justify-center py-12">
          <Spinner />
        </div>
      </div>
    );
  }

  return (
    <div className="mb-5">
      <SectionTag title="Redeem Your Points" />

      {/* Filter Tabs */}
      <div className="my-6 flex flex-wrap gap-3 pb-3">
        {filterTabs.map((tab) => (
          <button
            onClick={() => setActiveFilter(tab.id)}
            className={`relative flex items-center gap-3 rounded-t-lg p-3 font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-secondary-purple ${
              activeFilter === tab.id
                ? "border-b-[3px] border-secondary-purple bg-tertiary-purple text-secondary-purple"
                : "text-gray-600 hover:bg-tertiary-purple"
            }`}
          >
            {tab.label}
            <span
              className={`flex h-5 min-w-[1.5rem] items-center justify-center rounded-full px-2 text-xs font-semibold ${
                activeFilter === tab.id
                  ? "bg-secondary-purple/10 text-secondary-purple"
                  : "bg-primary-gray text-secondary-gray"
              }`}
            >
              {getCount(tab.id)}
            </span>
          </button>
        ))}
      </div>

      {/* Rewards Grid */}
      {filteredItems.length > 0 ? (
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredItems.map((item) => (
            <RewardCard key={item.id} item={item} userPoints={userPoints} />
          ))}
        </div>
      ) : (
        <div className=""></div>
      )}
    </div>
  );
}
