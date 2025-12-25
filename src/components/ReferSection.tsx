import { useState } from "react";
import SectionTag from "./SectionTag";
import FacebookIcon from "./icons/FacebookIcon";
import LinkedInIcon from "./icons/LinkedInIcon";
import TwitterIcon from "./icons/TwitterIcon";
import WhatsappIcon from "./icons/WhatsappIcon";
import GreenCheckIcon from "./icons/GreenCheckIcon";
import CopyIcon from "./icons/CopyIcon";

const socialMedias = [
  {
    icon: <FacebookIcon />,
    color: "rgb(24, 119, 242)",
  },
  {
    icon: <TwitterIcon />,
    color: "#000",
  },
  {
    icon: <LinkedInIcon />,
    color: "rgb(0, 119, 181)",
  },
  { icon: <WhatsappIcon />, color: "rgb(37, 211, 102)" },
];

export default function ReferSection() {
  const [isCopied, setIsCopied] = useState(false);
  const referralLink = "https://flowvahub.com/signup/?ref=abdul5595";

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(referralLink);
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

  return (
    <div className="space-y-6">
      <SectionTag title="Refer & Earn" />

      <div className="border border-[#f3f4f6] bg-primary-white transition-all duration-200 hover:-translate-y-[5px]">
        <article className="flex items-center gap-3 rounded-t-2xl bg-primary-blue p-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-users h-6 w-6 text-secondary-purple"
          >
            <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
            <circle cx="9" cy="7" r="4"></circle>
            <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
            <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
          </svg>

          <div>
            <h3 className="text-xl font-semibold text-gray-700">
              Share Your Link
            </h3>
            <p className="text-sm text-gray-500">
              Invite friends and earn 25 points when they join!
            </p>
          </div>
        </article>

        {/* REFERRAL COUNTS */}
        <article className="my-4 flex justify-between p-4">
          <div className="flex basis-1/2 flex-col items-center">
            <span className="text-[1.5rem] font-semibold text-secondary-purple">
              0
            </span>
            <span className="text-gray-600">Referrals</span>
          </div>
          <div className="flex basis-1/2 flex-col items-center">
            <span className="text-[1.5rem] font-semibold text-secondary-purple">
              0
            </span>
            <span className="text-gray-600">Points Earned</span>
          </div>
        </article>

        {/* REFERRAL LINK */}
        <div className="rounded-t-2xl bg-purple-bg3 p-4">
          <p className="mb-2 text-sm text-gray-700">
            Your personal referral link:
          </p>
          <div className="relative">
            <input
              type="text"
              readOnly
              value={referralLink}
              className="w-full rounded-md border border-gray-300 px-3 py-2 pr-12 text-sm outline-none focus:border-transparent focus:ring-2 focus:ring-secondary-purple"
            />
            <button
              onClick={handleCopy}
              className="absolute right-[10px] top-1/2 -translate-y-1/2 transition-all"
            >
              {isCopied ? <GreenCheckIcon /> : <CopyIcon />}
            </button>
          </div>
        </div>

        {/* SOCIAL LINKS */}
        <div className="mt-4 flex justify-center gap-4">
          {socialMedias.map((media) => (
            <button
              key={media.color}
              style={{ background: media.color }}
              className="flex h-[30px] w-[30px] items-center justify-center rounded-full bg-[] text-[18px] text-white transition-transform duration-200 hover:translate-y-[-3px]"
            >
              {media.icon}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
