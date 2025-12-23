import ReferBlock from "./ReferBlock";
import SectionTag from "./SectionTag";
import ShareIcon from "./icons/ShareIcon";

export default function EarnSection() {
  return (
    <div className="mb-6 border-red-500">
      <SectionTag title="Earn More Points" />

      <div className="grid grid-cols-3 land-phone:grid-cols-1 gap-4">
        {/* Refer and Win */}
        <ReferBlock type="win">
          {/* BOTTOM */}
          <div className="rounded-b-xl bg-primary-white p-4">
            <p className="text-sm font-medium">
              Invite 3 friends by Nov 20 and earn a chance to be one of 5
              winners of{" "}
              <span className="text-secondary-purple">10,000 points</span>.
              Friends must complete onboarding to qualify.
            </p>
          </div>
        </ReferBlock>

        {/* Share Your Stack */}
        <ReferBlock type="share">
          {/* BOTTOM */}
          <article className="flex items-center justify-between bg-primary-white p-4">
            <p className="text-sm font-medium">Share your tool stack</p>

            <div className="group flex items-center gap-2 rounded-full border-0 bg-[#eef2ff] px-4 py-2 text-sm font-semibold text-secondary-purple transition-all duration-300 hover:bg-secondary-purple">
              <ShareIcon />
              <p className="group-hover:text-white">Share</p>
            </div>
          </article>
        </ReferBlock>
      </div>
    </div>
  );
}
