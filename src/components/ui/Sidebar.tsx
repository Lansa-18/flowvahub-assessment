import { Link, useLocation } from "react-router-dom";

// Icon wrapper component that allows CSS color control
const Icon = ({
  src,
  alt,
  className = "",
}: {
  src: string;
  alt: string;
  className?: string;
}) => {
  return (
    <div
      className={`h-5 w-5 ${className}`}
      aria-label={alt}
      style={{
        WebkitMaskImage: `url(${src})`,
        maskImage: `url(${src})`,
        WebkitMaskSize: "contain",
        maskSize: "contain",
        WebkitMaskRepeat: "no-repeat",
        maskRepeat: "no-repeat",
        WebkitMaskPosition: "center",
        maskPosition: "center",
        backgroundColor: "currentColor",
      }}
    />
  );
};

const navigationItems = [
  { name: "Home", path: "/", icon: "/homeIcon.svg" },
  { name: "Discover", path: "/discover", icon: "/discoverIcon.svg" },
  { name: "Library", path: "/library", icon: "/libraryIcon.svg" },
  { name: "Tech Stack", path: "/tech", icon: "/techStackIcon.svg" },
  {
    name: "Subscriptions",
    path: "/subscriptions",
    icon: "/subscriptionIcon.svg",
  },
  { name: "Rewards Hub", path: "/rewards", icon: "/rewardIcon.svg" },
  { name: "Settings", path: "/settings", icon: "/settingsIcon.svg" },
];

export default function Sidebar() {
  const location = useLocation();

  return (
    <aside className="flex h-screen w-[15rem] flex-col border-r border-gray-200 bg-white px-4">
      {/* Logo */}
      <article className="my-3 flex items-center gap-3 border-red-500 px-3 py-2">
        <img src="/flowva_logo.png" className="h-[60px]" alt="flowva-logo" />
      </article>

      {/* Navigation */}
      <nav className="mt-2 flex-1">
        <ul className="space-y-2">
          {navigationItems.map((item) => {
            const isActive = location.pathname === item.path;

            return (
              <li key={item.path}>
                <Link
                  to={item.path}
                  className={`group flex items-center gap-3 rounded-lg px-4 py-2.5 transition-colors duration-300 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-secondary-purple ${
                    isActive
                      ? "bg-primary-purple text-secondary-purple"
                      : "text-black hover:bg-secondary-purple hover:bg-opacity-10 hover:text-purple-600"
                  } `}
                >
                  <Icon
                    src={item.icon}
                    alt={item.name}
                    className="h-4 w-4 transition-colors"
                  />
                  <span className="tracking-wide">{item.name}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>

      {/* User Profile */}
      <article className="border-t border-black py-4">
        <div className="flex items-center gap-3">
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-300 text-sm font-semibold text-gray-700">
            A
          </div>
          <div className="min-w-0 flex-1">
            <p className="truncate text-sm font-medium text-gray-900">
              Abdulkareem
            </p>
            <p className="truncate text-xs text-gray-500">
              olamideiyanda18@gmai...
            </p>
          </div>
        </div>
      </article>
    </aside>
  );
}
