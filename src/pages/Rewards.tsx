import { useState } from "react";
import RewardSection from "@/components/RewardSection";
import EarnSection from "@/components/EarnSection";
import ReferSection from "@/components/ReferSection";
import HamburgerIcon from "@/components/icons/HamburgerIcon";
import { useNavModalProvider } from "@/context/NavModalContext";

export default function Rewards() {
  const [activeTab, setActiveTab] = useState<"earn" | "redeem">("earn");
  const { setIsOpen } = useNavModalProvider();

  const handleToggleNa1vModal = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <section className="min-h-screen bg-primary-white">
      {/* Header */}
      <article className="sticky top-0 z-10 border-red-500 bg-primary-white px-8 pb-4 pt-8">
        <div className="mx-auto max-w-7xl">
          <article className="flex items-center justify-between">
            <div>
              <h1 className="flex items-center gap-2 text-2xl font-medium">
                <button
                  onClick={handleToggleNa1vModal}
                  type="button"
                  aria-label="Hamburger menu"
                  className="hidden custom-1050:block"
                >
                  <HamburgerIcon />
                </button>
                Rewards Hub
              </h1>
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
        </div>
      </article>

      {/* Content */}
      <article className="mx-auto max-w-7xl border-blue-500 px-8 pb-8">
        {/* Tabs */}
        <article className="mb-7 mt-6 flex gap-3">
          <button
            onClick={() => setActiveTab("earn")}
            className={`relative rounded-t-lg p-3 font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-secondary-purple ${
              activeTab === "earn"
                ? "border-b-[3px] border-secondary-purple bg-tertiary-purple text-secondary-purple"
                : "text-gray-600 hover:bg-tertiary-purple hover:text-gray-900"
            }`}
          >
            Earn Points
          </button>
          <button
            onClick={() => setActiveTab("redeem")}
            className={`relative rounded-t-lg p-3 font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-secondary-purple ${
              activeTab === "redeem"
                ? "border-b-[3px] border-secondary-purple bg-tertiary-purple text-secondary-purple"
                : "text-gray-600 hover:bg-tertiary-purple hover:text-gray-900"
            }`}
          >
            Redeem Rewards
          </button>
        </article>

        {activeTab === "earn" ? (
          <>
            {/* Your Rewards Journey */}
            <RewardSection />

            {/* Earn More Points */}
            <EarnSection />

            {/* Refer & Earn */}
            <ReferSection />
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
