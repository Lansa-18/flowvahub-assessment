import ShareIcon from "./icons/ShareIcon";

interface ReferBlockProps {
  type: string;
  children: React.ReactNode;
}

export default function ReferBlock({ type, children }: ReferBlockProps) {
  return (
    <article className="flex flex-col rounded-xl border bg-primary-white shadow-sm duration-200 hover:-translate-y-[5px] hover:border-secondary-purple hover:shadow-lg">
      {/* TOP */}
      {type === "win" ? (
        <div className="flex items-center gap-3 rounded-xl bg-white p-4">
          <div className="bg-purple-bg1 rounded-xl p-2">
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
              className="lucide lucide-star text-secondary-purple"
            >
              <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
            </svg>
          </div>

          <h3 className="font-semibold text-gray-900">
            Refer and win 10,000 points!
          </h3>
        </div>
      ) : (
        <div className="flex items-center gap-3 rounded-xl bg-white p-4">
          <div className="bg-purple-bg2 rounded-xl p-2">
            <ShareIcon />
          </div>

          <div>
            <h3 className="font-semibold text-gray-900">Share Your Stack</h3>
            <p className="text-xs text-gray-500">Earn +25 pts</p>
          </div>
        </div>
      )}

      <div className="rounded-b-xl bg-primary-white">{children}</div>
    </article>
  );
}
