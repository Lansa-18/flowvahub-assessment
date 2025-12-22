import Calendar from "./Calendar";
import { Button } from "./ui/button";
import CoinIcon from "./ui/CoinIcon";

export default function RewardJourneyGrid() {
  return (
    <article className="grid grid-cols-1 gap-6 lg:grid-cols-3">
      {/* Points Balance */}
      <div className="rounded-2xl bg-white shadow-sm transition-all duration-200 hover:-translate-y-[5px] hover:shadow-lg">
        <div className="mb-4 flex items-center gap-2 rounded-t-2xl bg-primary-blue p-4">
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
          <h3 className="text-lg font-bold text-gray-900">Points Balance</h3>
        </div>

        <article className="mt-6 px-4">
          <div className="mb-4 flex items-center justify-between">
            <h2 className="text-5xl font-bold text-secondary-purple">10</h2>
            <CoinIcon size={96} className="border-red-500" />
          </div>

          <div className="mb-2">
            <div className="mb-2 flex justify-between text-sm">
              <span className="text-gray-600">Progress to $5 Gift Card</span>
              <span className="font-medium text-gray-900">5/5000</span>
            </div>
            <div className="h-2 overflow-hidden rounded-full bg-gray-200">
              <div
                className="h-full bg-gradient-to-r from-purple-500 to-purple-600"
                style={{ width: "10.5%" }}
              />
            </div>
          </div>

          <p className="flex items-center gap-1.5 text-sm text-gray-600">
            🚀 Just getting started — keep earning points!
          </p>
        </article>
      </div>

      {/* Daily Streak */}
      <div className="rounded-2xl bg-white shadow-sm transition-all duration-200 hover:-translate-y-[5px] hover:shadow-lg">
        <div className="mb-4 flex items-center gap-2 rounded-t-2xl bg-primary-blue p-4">
          <svg
            aria-hidden="true"
            focusable="false"
            data-prefix="far"
            data-icon="calendar"
            className="svg-inline--fa fa-calendar h-5 w-5 text-[#70D6FF]"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
          >
            <path
              fill="currentColor"
              d="M152 24c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 40L64 64C28.7 64 0 92.7 0 128l0 16 0 48L0 448c0 35.3 28.7 64 64 64l320 0c35.3 0 64-28.7 64-64l0-256 0-48 0-16c0-35.3-28.7-64-64-64l-40 0 0-40c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 40L152 64l0-40zM48 192l352 0 0 256c0 8.8-7.2 16-16 16L64 464c-8.8 0-16-7.2-16-16l0-256z"
            ></path>
          </svg>
          <h3 className="text-lg font-bold text-gray-900">Daily Streak </h3>
        </div>

        <article className="mt-6 px-4">
          <h2 className="mb-2 text-4xl font-extrabold text-secondary-purple">
            2 days
          </h2>

          {/* Calendar */}
          <Calendar />

          <p className="mt-3 text-center text-sm text-gray-600">
            Check in daily to earn +5 points
          </p>

          <button
            disabled
            className="mt-4 flex w-full cursor-not-allowed items-center justify-center gap-3 rounded-full bg-tertiary-gray py-3 text-sm font-bold text-gray-500"
          >
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
              className="lucide lucide-zap h-5 w-5"
            >
              <path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path>
            </svg>
            Claimed Today
          </button>
        </article>
      </div>

      {/* Featured Tool Spotlight */}
      <div className="rounded-2xl bg-white shadow-sm transition-all duration-200 hover:-translate-y-[5px] hover:shadow-lg">
        {/* TOP */}
        <article className="bg-purple-blue-gradient rounded-t-2xl p-4">
          <article className="flex items-center justify-between">
            <div className="space-y-4 text-white">
              <span className="rounded-full bg-white/20 px-3 py-1 text-center text-xs font-bold backdrop-blur-sm">
                Featured
              </span>

              <h3 className="mb-1 text-xl font-bold leading-tight">
                Top Tool Spotlight
              </h3>

              <p className="text-lg">
                <strong>Reclaim</strong>
              </p>
            </div>

            <div className="w-[20%]">
              <img src="/reclaim.png" alt="reclaim-image" className="" />
            </div>
          </article>
        </article>

        {/* BOTTOM */}
        <article className="p-4">
          <article className="flex">
            <div className="mr-[1rem] flex h-6 w-6 flex-shrink-0 animate-pulse items-center justify-center rounded-md bg-primary-blue text-secondary-purple">
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
                className="lucide lucide-calendar"
              >
                <path d="M8 2v4"></path>
                <path d="M16 2v4"></path>
                <rect width="18" height="18" x="3" y="4" rx="2"></rect>
                <path d="M3 10h18"></path>
              </svg>
            </div>

            <div>
              <h4 className="mb-1 font-bold">
                Automate and Optimize Your Schedule
              </h4>
              <p className="text-sm text-gray-700">
                Reclaim.ai is an AI-powered calendar assistant that
                automatically schedules your tasks, meetings, and breaks to
                boost productivity. Free to try — earn Flowva Points when you
                sign up!
              </p>
            </div>
          </article>

          <div className="mt-4 flex items-center justify-between">
            <Button
              variant="ghost"
              className="rounded-full !bg-secondary-purple !text-white hover:!bg-secondary-purple/90"
            >
              <svg
                aria-hidden="true"
                focusable="false"
                data-prefix="fas"
                data-icon="user-plus"
                className="svg-inline--fa fa-user-plus"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 640 512"
              >
                <path
                  fill="currentColor"
                  d="M96 128a128 128 0 1 1 256 0A128 128 0 1 1 96 128zM0 482.3C0 383.8 79.8 304 178.3 304l91.4 0C368.2 304 448 383.8 448 482.3c0 16.4-13.3 29.7-29.7 29.7L29.7 512C13.3 512 0 498.7 0 482.3zM504 312l0-64-64 0c-13.3 0-24-10.7-24-24s10.7-24 24-24l64 0 0-64c0-13.3 10.7-24 24-24s24 10.7 24 24l0 64 64 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-64 0 0 64c0 13.3-10.7 24-24 24s-24-10.7-24-24z"
                ></path>
              </svg>
              Sign Up
            </Button>
            <Button
              variant="ghost"
              className="rounded-full !bg-purple-red-gradient !text-white "
            >
              <svg
                aria-hidden="true"
                focusable="false"
                data-prefix="fas"
                data-icon="gift"
                className="svg-inline--fa fa-gift"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <path
                  fill="currentColor"
                  d="M190.5 68.8L225.3 128l-1.3 0-72 0c-22.1 0-40-17.9-40-40s17.9-40 40-40l2.2 0c14.9 0 28.8 7.9 36.3 20.8zM64 88c0 14.4 3.5 28 9.6 40L32 128c-17.7 0-32 14.3-32 32l0 64c0 17.7 14.3 32 32 32l448 0c17.7 0 32-14.3 32-32l0-64c0-17.7-14.3-32-32-32l-41.6 0c6.1-12 9.6-25.6 9.6-40c0-48.6-39.4-88-88-88l-2.2 0c-31.9 0-61.5 16.9-77.7 44.4L256 85.5l-24.1-41C215.7 16.9 186.1 0 154.2 0L152 0C103.4 0 64 39.4 64 88zm336 0c0 22.1-17.9 40-40 40l-72 0-1.3 0 34.8-59.2C329.1 55.9 342.9 48 357.8 48l2.2 0c22.1 0 40 17.9 40 40zM32 288l0 176c0 26.5 21.5 48 48 48l144 0 0-224L32 288zM288 512l144 0c26.5 0 48-21.5 48-48l0-176-192 0 0 224z"
                ></path>
              </svg>
              Claim 50 pts
            </Button>
          </div>
        </article>
      </div>
    </article>
  );
}
