import type { RedeemableItem } from "@/lib/utils/types";

interface RewardCardProps {
  item: RedeemableItem;
  userPoints: number;
}

export default function RewardCard({ item, userPoints }: RewardCardProps) {
  // Get icon based on type
  const getIcon = () => {
    if (item.icon) return item.icon;

    // Fallback icons based on type
    switch (item.type) {
      case "payment":
        return "💸";
      case "card":
        return "🎁";
      case "course":
        return "📚";
      default:
        return "🎁";
    }
  };

  return (
    <article className="relative cursor-not-allowed overflow-hidden rounded-[12px] border border-purple-bg4 bg-white p-[1.5rem] opacity-[0.7] shadow-[0_2px_8px_rgba(0,0,0,0.05)] transition-all duration-200 ease-linear hover:translate-y-[-5px] hover:shadow-[0_6px_16px_rgba(0,0,0,0.1)]">
      <div className="m-[0_auto_1rem] flex h-[48px] w-[48px] items-center justify-center rounded-[12px] bg-purple-bg4 text-[1.5rem] text-secondary-purple">
        {getIcon()}
      </div>
      <h4 className="mb-2 text-center text-[1.1rem] font-semibold">
        {item.title}
      </h4>
      <p className="mb-4 text-center text-[0.9rem] text-[#2D3748]">
        {item.description}
      </p>
      <div className="mb-4 flex items-center justify-center font-semibold text-secondary-purple">
        ⭐ {item.points} pts
      </div>
      <button
        disabled={item.points > userPoints}
        className="w-full rounded-[8px] bg-[#d7e0ed] p-[0.75rem] font-semibold text-white transition-all duration-300 ease-in-out"
      >
        Locked
      </button>
    </article>
  );
}
