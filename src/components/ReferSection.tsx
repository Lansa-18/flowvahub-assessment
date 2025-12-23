import SectionTag from "./SectionTag";
import FacebookIcon from "./icons/FacebookIcon";
import LinkedInIcon from "./icons/LinkedInIcon";
import TwitterIcon from "./icons/TwitterIcon";
import WhatsappIcon from "./icons/WhatsappIcon";

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
  return (
    <div className="space-y-6">
      <SectionTag title="Refer & Earn" />

      <div className="border border-[#f3f4f6] bg-primary-white hover:-translate-y-[5px] transition-all duration-200">
        <article className="flex items-center gap-3 rounded-t-2xl bg-primary-blue p-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
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
        <div className="bg-purple-bg3 rounded-t-2xl p-4">
          <p className="mb-2 text-sm text-gray-700">
            Your personal referral link:
          </p>
          <div className="relative">
            <input
              type="text"
              value="https://flowvahub.com/signup/?ref=abdul5595"
              className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm outline-none focus:border-transparent focus:ring-2 focus:ring-secondary-purple"
            />
            <button className="absolute right-[10px] top-1/2 -translate-y-1/2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="lucide lucide-copy text-secondary-purple cursor-pointer"
              >
                <rect width="14" height="14" x="8" y="8" rx="2" ry="2"></rect>
                <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"></path>
              </svg>
            </button>
          </div>
        </div>

        {/* SOCIAL LINKS */}
        <div className="mt-4 flex justify-center gap-4">
          {socialMedias.map((media) => (
            <button
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
