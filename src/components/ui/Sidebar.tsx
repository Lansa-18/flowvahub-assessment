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
      className={`w-5 h-5 ${className}`}
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
    <aside className="w-[15rem] bg-white border-r border-gray-200 h-screen flex flex-col">
      {/* Logo */}
      <article className="px-7 py-2 my-3 border-red-500 flex items-center gap-3">
        <img src="/flowva_logo.png" alt="flowva-logo    " />
      </article>

      {/* Navigation */}
      <nav className="flex-1 px-4 mt-2">
        <ul className="space-y-2">
          {navigationItems.map((item) => {
            const isActive = location.pathname === item.path;

            return (
              <li key={item.path}>
                <Link
                  to={item.path}
                  className={`
                    flex items-center gap-3 px-4 py-2.5 rounded-lg transition-colors group
                    ${
                      isActive
                        ? "bg-purple-100 text-purple-700"
                        : "text-gray-700 hover:bg-gray-100 hover:text-purple-600"
                    }
                  `}
                >
                  <Icon
                    src={item.icon}
                    alt={item.name}
                    className="transition-colors w-4 h-4"
                  />
                  <span className="tracking-wide">{item.name}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>

      {/* User Profile */}
      <article className="p-4 border-t border-gray-200">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center text-sm font-semibold text-gray-700">
            A
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium text-gray-900 truncate">
              Abdulkareem
            </p>
            <p className="text-xs text-gray-500 truncate">
              olamide...@gmail.com
            </p>
          </div>
        </div>
      </article>
    </aside>
  );
}
