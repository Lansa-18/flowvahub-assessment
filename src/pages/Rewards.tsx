import { useState } from "react";
import RewardJourneyGrid from "../components/RewardJourneyGrid";

export default function Rewards() {
  const [activeTab, setActiveTab] = useState<"earn" | "redeem">("earn");

  return (
    <section className="min-h-screen p-8 bg-primary-white">
      {/* Header */}
      <article className="border-red-500 mb-5">
        <div className="max-w-7xl mx-auto">
          <article className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-medium">Rewards Hub</h1>
              <p className="text-gray-600 font-medium mt-2">
                Earn points, unlock rewards, and celebrate your progress!
              </p>
            </div>
            <button className="flex items-center justify-center p-3 bg-primary-gray hover:bg-secondary-gray group rounded-full transition-colors">
              <svg
                aria-hidden="true"
                focusable="false"
                data-prefix="fas"
                data-icon="bell"
                className="w-4 h-4 text-[#2D3748] group-hover:text-secondary-purple group-hover:rotate-[10deg] group-hover:scale-110 transition-all duration-200"
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
          <article className="flex gap-8 mt-6 mb-7">
            <button
              onClick={() => setActiveTab("earn")}
              className={`p-3 font-medium transition-colors relative ${
                activeTab === "earn"
                  ? "text-purple-600 border-b-[3px] bg-tertiary-purple border-secondary-purple rounded-t-lg"
                  : "text-gray-600 hover:text-gray-900"
              }`}
            >
              Earn Points
            </button>
            <button
              onClick={() => setActiveTab("redeem")}
              className={`p-3 font-medium transition-colors relative ${
                activeTab === "redeem"
                  ? "text-purple-600 border-b-[3px] bg-tertiary-purple border-secondary-purple rounded-t-lg"
                  : "text-gray-600 hover:text-gray-900"
              }`}
            >
              Redeem Rewards
            </button>
          </article>
        </div>
      </article>

      {/* Content */}
      <article className="max-w-7xl mx-auto">
        {activeTab === "earn" ? (
          <>
            {/* Your Rewards Journey */}
            <div className="mb-8">
              <article className="border-l-4 border-purple-600 pl-4 mb-6">
                <h2 className="text-2xl font-bold text-black">
                  Your Rewards Journey
                </h2>
              </article>

              <RewardJourneyGrid />
            </div>

            {/* Earn More Points */}
            <div>
              <div className="border-l-4 border-purple-600 pl-4 mb-6">
                <h2 className="text-2xl font-bold text-gray-900">
                  Earn More Points
                </h2>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Refer and Win */}
                <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-purple-100 rounded-xl">
                      <svg
                        className="w-6 h-6 text-purple-600"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">
                        Refer and win 10,000 points!
                      </h3>
                      <p className="text-sm text-gray-600 mb-4 leading-relaxed">
                        Invite 3 friends by Nov 20 and earn a chance to be one
                        of 5 winners of{" "}
                        <span className="font-semibold text-purple-600">
                          10,000 points
                        </span>
                        . Friends must complete onboarding to qualify.
                      </p>
                      <button className="text-purple-600 font-medium text-sm hover:text-purple-700 flex items-center gap-1">
                        Learn more
                        <svg
                          className="w-4 h-4"
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
                <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-blue-100 rounded-xl">
                      <svg
                        className="w-6 h-6 text-blue-600"
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
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="text-lg font-semibold text-gray-900">
                          Share Your Stack
                        </h3>
                        <span className="text-sm text-gray-600">
                          Earn +25 pts
                        </span>
                      </div>
                      <p className="text-sm text-gray-600 mb-4">
                        Share your tool stack
                      </p>
                      <button className="bg-white border border-gray-300 text-gray-700 px-4 py-2 rounded-lg font-medium text-sm hover:bg-gray-50 flex items-center gap-2">
                        <svg
                          className="w-4 h-4 text-purple-600"
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
          <div className="bg-white rounded-xl p-12 text-center border border-gray-200">
            <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg
                className="w-8 h-8 text-gray-400"
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
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
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
