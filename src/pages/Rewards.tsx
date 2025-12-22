import { useState } from "react";
import RewardJourneyGrid from "../components/RewardJourneyGrid";

export default function Rewards() {
  const [activeTab, setActiveTab] = useState<"earn" | "redeem">("earn");

  return (
    <section className="min-h-screen bg-primary-white p-8">
      {/* Header */}
      <article className="mb-5 border-red-500">
        <div className="mx-auto max-w-7xl">
          <article className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-medium">Rewards Hub</h1>
              <p className="mt-2 font-medium text-gray-600">
                Earn points, unlock rewards, and celebrate your progress!
              </p>
            </div>
            <button className="group flex items-center justify-center rounded-full bg-primary-gray p-3 transition-colors hover:bg-secondary-gray">
              <svg
                aria-hidden="true"
                focusable="false"
                data-prefix="fas"
                data-icon="bell"
                className="h-4 w-4 text-[#2D3748] transition-all duration-200 group-hover:rotate-[10deg] group-hover:scale-110 group-hover:text-secondary-purple"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
              >
                <path
                  fill="currentColor"
                  d="M224 0c-17.7 0-32 14.3-32 32l0 19.2C119 66 64 130.6 64 208l0 18.8c0 47-17.3 92.4-48.5 127.6l-7.4 8.3c-8.4 9.4-10.4 22.9-5.3 34.4S19.4 416 32 416l384 0c12.6 0 24-7.4 29.2-18.9s3.1-25-5.3-34.4l-7.4-8.3C401.3 319.2 384 273.9 384 226.8l0-18.8c0-77.4-55-142-128-156.8L256 32c0-17.7-14.3-32-32-32zm45.3 493.3c12-12 18.7-28.3 18.7-45.3l-64 0-64 0c0 17 6.7 33.3 18.7 45.3s28.3 18.7 45.3 18.7s33.3-6.7 45.3-18.7z"
                ></path>
              </svg>
            </button>
          </article>

          {/* Tabs */}
          <article className="mb-7 mt-6 flex gap-8">
            <button
              onClick={() => setActiveTab("earn")}
              className={`relative p-3 font-medium transition-colors ${
                activeTab === "earn"
                  ? "rounded-t-lg border-b-[3px] border-secondary-purple bg-tertiary-purple text-purple-600"
                  : "text-gray-600 hover:text-gray-900"
              }`}
            >
              Earn Points
            </button>
            <button
              onClick={() => setActiveTab("redeem")}
              className={`relative p-3 font-medium transition-colors ${
                activeTab === "redeem"
                  ? "rounded-t-lg border-b-[3px] border-secondary-purple bg-tertiary-purple text-purple-600"
                  : "text-gray-600 hover:text-gray-900"
              }`}
            >
              Redeem Rewards
            </button>
          </article>
        </div>
      </article>

      {/* Content */}
      <article className="mx-auto max-w-7xl">
        {activeTab === "earn" ? (
          <>
            {/* Your Rewards Journey */}
            <div className="mb-8">
              <article className="mb-6 border-l-4 border-purple-600 pl-4">
                <h2 className="text-2xl font-bold text-black">
                  Your Rewards Journey
                </h2>
              </article>

              <RewardJourneyGrid />
            </div>

            {/* Earn More Points */}
            <div>
              <div className="mb-6 border-l-4 border-purple-600 pl-4">
                <h2 className="text-2xl font-bold text-gray-900">
                  Earn More Points
                </h2>
              </div>

              <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
                {/* Refer and Win */}
                <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
                  <div className="flex items-start gap-4">
                    <div className="rounded-xl bg-purple-100 p-3">
                      <svg
                        className="h-6 w-6 text-purple-600"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <h3 className="mb-2 text-lg font-semibold text-gray-900">
                        Refer and win 10,000 points!
                      </h3>
                      <p className="mb-4 text-sm leading-relaxed text-gray-600">
                        Invite 3 friends by Nov 20 and earn a chance to be one
                        of 5 winners of{" "}
                        <span className="font-semibold text-purple-600">
                          10,000 points
                        </span>
                        . Friends must complete onboarding to qualify.
                      </p>
                      <button className="flex items-center gap-1 text-sm font-medium text-purple-600 hover:text-purple-700">
                        Learn more
                        <svg
                          className="h-4 w-4"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 5l7 7-7 7"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>

                {/* Share Your Stack */}
                <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
                  <div className="flex items-start gap-4">
                    <div className="rounded-xl bg-blue-100 p-3">
                      <svg
                        className="h-6 w-6 text-blue-600"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"
                        />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <div className="mb-2 flex items-center justify-between">
                        <h3 className="text-lg font-semibold text-gray-900">
                          Share Your Stack
                        </h3>
                        <span className="text-sm text-gray-600">
                          Earn +25 pts
                        </span>
                      </div>
                      <p className="mb-4 text-sm text-gray-600">
                        Share your tool stack
                      </p>
                      <button className="flex items-center gap-2 rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50">
                        <svg
                          className="h-4 w-4 text-purple-600"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"
                          />
                        </svg>
                        Share
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        ) : (
          <div className="rounded-xl border border-gray-200 bg-white p-12 text-center">
            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gray-100">
              <svg
                className="h-8 w-8 text-gray-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                />
              </svg>
            </div>
            <h3 className="mb-2 text-xl font-semibold text-gray-900">
              Redeem Rewards Coming Soon
            </h3>
            <p className="text-gray-600">
              Keep earning points! We're preparing exciting rewards for you to
              redeem.
            </p>
          </div>
        )}
      </article>
    </section>
  );
}
