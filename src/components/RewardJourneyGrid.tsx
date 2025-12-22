export default function RewardJourneyGrid() {
  return (
    <article className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      {/* Points Balance */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200">
        <div className="flex items-center gap-2 mb-4 p-4 bg-primary-blue">
          <svg
            aria-hidden="true"
            focusable="false"
            data-prefix="fas"
            data-icon="award"
            className="svg-inline--fa fa-award h-5 w-5 text-[#9013fe]"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 384 512"
          >
            <path
              fill="currentColor"
              d="M173.8 5.5c11-7.3 25.4-7.3 36.4 0L228 17.2c6 3.9 13 5.8 20.1 5.4l21.3-1.3c13.2-.8 25.6 6.4 31.5 18.2l9.6 19.1c3.2 6.4 8.4 11.5 14.7 14.7L344.5 83c11.8 5.9 19 18.3 18.2 31.5l-1.3 21.3c-.4 7.1 1.5 14.2 5.4 20.1l11.8 17.8c7.3 11 7.3 25.4 0 36.4L366.8 228c-3.9 6-5.8 13-5.4 20.1l1.3 21.3c.8 13.2-6.4 25.6-18.2 31.5l-19.1 9.6c-6.4 3.2-11.5 8.4-14.7 14.7L301 344.5c-5.9 11.8-18.3 19-31.5 18.2l-21.3-1.3c-7.1-.4-14.2 1.5-20.1 5.4l-17.8 11.8c-11 7.3-25.4 7.3-36.4 0L156 366.8c-6-3.9-13-5.8-20.1-5.4l-21.3 1.3c-13.2 .8-25.6-6.4-31.5-18.2l-9.6-19.1c-3.2-6.4-8.4-11.5-14.7-14.7L39.5 301c-11.8-5.9-19-18.3-18.2-31.5l1.3-21.3c.4-7.1-1.5-14.2-5.4-20.1L5.5 210.2c-7.3-11-7.3-25.4 0-36.4L17.2 156c3.9-6 5.8-13 5.4-20.1l-1.3-21.3c-.8-13.2 6.4-25.6 18.2-31.5l19.1-9.6C65 70.2 70.2 65 73.4 58.6L83 39.5c5.9-11.8 18.3-19 31.5-18.2l21.3 1.3c7.1 .4 14.2-1.5 20.1-5.4L173.8 5.5zM272 192a80 80 0 1 0 -160 0 80 80 0 1 0 160 0zM1.3 441.8L44.4 339.3c.2 .1 .3 .2 .4 .4l9.6 19.1c11.7 23.2 36 37.3 62 35.8l21.3-1.3c.2 0 .5 0 .7 .2l17.8 11.8c5.1 3.3 10.5 5.9 16.1 7.7l-37.6 89.3c-2.3 5.5-7.4 9.2-13.3 9.7s-11.6-2.2-14.8-7.2L74.4 455.5l-56.1 8.3c-5.7 .8-11.4-1.5-15-6s-4.3-10.7-2.1-16zm248 60.4L211.7 413c5.6-1.8 11-4.3 16.1-7.7l17.8-11.8c.2-.1 .4-.2 .7-.2l21.3 1.3c26 1.5 50.3-12.6 62-35.8l9.6-19.1c.1-.2 .2-.3 .4-.4l43.2 102.5c2.2 5.3 1.4 11.4-2.1 16s-9.3 6.9-15 6l-56.1-8.3-32.2 49.2c-3.2 5-8.9 7.7-14.8 7.2s-11-4.3-13.3-9.7z"
            ></path>
          </svg>
          <h3 className="font-bold text-lg text-gray-900">Points Balance</h3>
        </div>

        <article className="px-4">
          <div className="flex items-end justify-between mb-4">
            <div className="text-5xl font-bold text-gray-900">5</div>
            <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-full flex items-center justify-center shadow-lg">
              <span className="text-2xl">💰</span>
            </div>
          </div>

          <div className="mb-2">
            <div className="flex justify-between text-sm mb-2">
              <span className="text-gray-600">Progress to $5 Gift Card</span>
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
        </article>
      </div>

      {/* Daily Streak */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200">
        <div className="flex items-center gap-2 mb-4 p-4 bg-primary-blue">
          <svg
            aria-hidden="true"
            focusable="false"
            data-prefix="far"
            data-icon="calendar"
            className="svg-inline--fa fa-calendar  text-[#70D6FF] h-5 w-5 "
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
          >
            <path
              fill="currentColor"
              d="M152 24c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 40L64 64C28.7 64 0 92.7 0 128l0 16 0 48L0 448c0 35.3 28.7 64 64 64l320 0c35.3 0 64-28.7 64-64l0-256 0-48 0-16c0-35.3-28.7-64-64-64l-40 0 0-40c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 40L152 64l0-40zM48 192l352 0 0 256c0 8.8-7.2 16-16 16L64 464c-8.8 0-16-7.2-16-16l0-256z"
            ></path>
          </svg>
          <h3 className="font-bold text-lg text-gray-900">Daily Streak </h3>
        </div>

        <article className="px-4">
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
        </article>
      </div>

      {/* Featured Tool Spotlight */}
      <div className="mb-8">
        <div className="bg-gradient-to-br from-purple-600 via-purple-500 to-blue-500 rounded-xl p-6 shadow-lg text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 bg-white/10 px-4 py-1 rounded-bl-xl text-sm font-medium">
            Featured
          </div>

          <div className="flex items-start justify-between mb-4 mt-6">
            <div className="flex-1">
              <h3 className="text-2xl font-bold mb-2">Top Tool Spotlight</h3>
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
                automatically schedules your tasks, meetings, and breaks to
                boost productivity. Free to try — earn Flowva Points when you
                sign up!
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
    </article>
  );
}
