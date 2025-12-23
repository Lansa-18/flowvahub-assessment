import RewardJourneyGrid from "./RewardJourneyGrid";
import SectionTag from "./SectionTag";

export default function RewardSection() {
  return (
    <div className="mb-8">
      <SectionTag title="Your Rewards Journey" />

      <RewardJourneyGrid />
    </div>
  );
}
