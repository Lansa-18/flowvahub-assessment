import { useState } from "react";

export default function Rewards() {
  const [activeTab, setActiveTab] = useState<"earn" | "redeem">("earn");

  return (
    <div className="min-h-screen">
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-8 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Rewards Hub</h1>
              <p className="text-gray-600 mt-1">
                Earn points, unlock rewards, and celebrate your progress!
              </p>
            </div>
            <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
              <svg
                className="w-6 h-6 text-gray-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                />
              </svg>
            </button>
          </div>

          {/* Tabs */}
          <div className="flex gap-8 mt-6">
            <button
              onClick={() => setActiveTab("earn")}
              className={`pb-3 px-1 font-medium transition-colors relative ${
                activeTab === "earn"
                  ? "text-purple-600"
                  : "text-gray-600 hover:text-gray-900"
              }`}
            >
              Earn Points
              {activeTab === "earn" && (
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-purple-600" />
              )}
            </button>
            <button
              onClick={() => setActiveTab("redeem")}
              className={`pb-3 px-1 font-medium transition-colors relative ${
                activeTab === "redeem"
                  ? "text-purple-600"
                  : "text-gray-600 hover:text-gray-900"
              }`}
            >
              Redeem Rewards
              {activeTab === "redeem" && (
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-purple-600" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-8 py-8">
        {activeTab === "earn" ? (
          <>
            {/* Your Rewards Journey */}
            <div className="mb-8">
              <div className="border-l-4 border-purple-600 pl-4 mb-6">
                <h2 className="text-2xl font-bold text-gray-900">
                  Your Rewards Journey
                </h2>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Points Balance */}
                <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 bg-purple-100 rounded-lg">
                      <svg
                        className="w-5 h-5 text-purple-600"
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
                    <h3 className="font-semibold text-gray-900">
                      Points Balance
                    </h3>
                  </div>

                  <div className="flex items-end justify-between mb-4">
                    <div className="text-5xl font-bold text-gray-900">5</div>
                    <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-full flex items-center justify-center shadow-lg">
                      <span className="text-2xl">💰</span>
                    </div>
                  </div>

                  <div className="mb-2">
                    <div className="flex justify-between text-sm mb-2">
                      <span className="text-gray-600">
                        Progress to $5 Gift Card
                      </span>
                      <span className="font-medium text-gray-900">5/5000</span>
                    </div>
                    <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-purple-500 to-purple-600"
                        style={{ width: "0.1%" }}
                      />
                    </div>
                  </div>

                  <p className="text-sm text-gray-600 flex items-center gap-1.5">
                    <svg
                      className="w-4 h-4 text-yellow-500"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M13 2L3 14h8l-1 8 10-12h-8l1-8z" />
                    </svg>
                    Just getting started — keep earning points!
                  </p>
                </div>

                {/* Daily Streak */}
                <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 bg-blue-100 rounded-lg">
                      <svg
                        className="w-5 h-5 text-blue-600"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                        />
                      </svg>
                    </div>
                    <h3 className="font-semibold text-gray-900">
                      Daily Streak
                    </h3>
                  </div>

                  <div className="text-5xl font-bold text-gray-900 mb-6">
                    1 <span className="text-2xl text-gray-600">day</span>
                  </div>

                  {/* Calendar */}
                  <div className="grid grid-cols-7 gap-2 mb-4">
                    {["M", "T", "W", "T", "F", "S", "S"].map((day, index) => (
                      <div key={day + index} className="text-center">
                        <div className="text-xs text-gray-500 mb-1">{day}</div>
                        <div
                          className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium mx-auto ${
                            index === 6
                              ? "bg-purple-600 text-white ring-4 ring-purple-100"
                              : "bg-gray-100 text-gray-400"
                          }`}
                        >
                          {index === 6 ? "✓" : ""}
                        </div>
                      </div>
                    ))}
                  </div>

                  <p className="text-sm text-gray-600 text-center">
                    Check in daily to earn +5 points
                  </p>

                  <button
                    disabled
                    className="w-full mt-4 py-2.5 bg-gray-200 text-gray-500 rounded-lg font-medium text-sm cursor-not-allowed"
                  >
                    <svg
                      className="w-4 h-4 inline mr-1"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M13 2L3 14h8l-1 8 10-12h-8l1-8z" />
                    </svg>
                    Claimed Today
                  </button>
                </div>
              </div>
            </div>

            {/* Featured Tool Spotlight */}
            <div className="mb-8">
              <div className="bg-gradient-to-br from-purple-600 via-purple-500 to-blue-500 rounded-xl p-6 shadow-lg text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 bg-white/10 px-4 py-1 rounded-bl-xl text-sm font-medium">
                  Featured
                </div>

                <div className="flex items-start justify-between mb-4 mt-6">
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-2">
                      Top Tool Spotlight
                    </h3>
                    <p className="text-xl font-semibold mb-1">Reclaim</p>
                  </div>
                  <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center shadow-lg">
                    <div className="grid grid-cols-2 gap-1">
                      <div className="w-4 h-4 bg-purple-500 rounded-sm" />
                      <div className="w-4 h-4 bg-blue-500 rounded-sm" />
                      <div className="w-4 h-4 bg-pink-500 rounded-sm" />
                      <div className="w-4 h-4 bg-yellow-500 rounded-sm" />
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3 mb-6">
                  <svg
                    className="w-5 h-5 mt-1 flex-shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                  <div>
                    <h4 className="font-semibold mb-2">
                      Automate and Optimize Your Schedule
                    </h4>
                    <p className="text-sm text-purple-100 leading-relaxed">
                      Reclaim.ai is an AI-powered calendar assistant that
                      automatically schedules your tasks, meetings, and breaks
                      to boost productivity. Free to try — earn Flowva Points
                      when you sign up!
                    </p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <button className="flex-1 bg-white text-purple-600 py-2.5 px-4 rounded-lg font-medium hover:bg-purple-50 transition-colors">
                    <svg
                      className="w-4 h-4 inline mr-2"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                    Sign up
                  </button>
                  <button className="bg-purple-700/50 hover:bg-purple-700 text-white py-2.5 px-4 rounded-lg font-medium transition-colors">
                    <svg
                      className="w-4 h-4 inline mr-2"
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
                    Claim 50 pts
                  </button>
                </div>
              </div>
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
      </div>
    </div>
  );
}
