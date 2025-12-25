import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { Dialog, DialogPortal } from "@/components/ui/dialog";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { useLogout } from "@/hooks/useLogout";
import { useUser } from "@/hooks/useUser";

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
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const { logout, isPending } = useLogout();
  const { avatar, email, userName, avatar_url, full_name } =
    useUser().user?.user_metadata ?? {};
  const firstName = full_name?.split(" ")[0];

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
      <article
        className="cursor-pointer border-t border-black py-4"
        onClick={() => setIsDialogOpen(true)}
      >
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-300 text-sm font-semibold uppercase text-gray-700">
            {avatar_url ? (
              <img
                src={avatar_url}
                alt="avatar-image"
                className="rounded-full"
              />
            ) : (
              avatar
            )}
          </div>
          <div className="min-w-0 flex-1">
            <p className="truncate text-sm font-medium text-gray-900">
              {full_name ? firstName : userName}
            </p>
            <p className="truncate text-xs text-gray-500">{email}</p>
          </div>
        </div>
      </article>

      {/* User Profile Dialog */}
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogPortal>
          <DialogPrimitive.Content className="fixed bottom-20 left-6 z-50 w-56 rounded-lg border outline-none border-secondary-purple bg-white p-0 shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95">
            <ul className="px-4 py-2">
              <li className="cursor-pointer rounded-[8px] px-4 py-2 hover:bg-[rgba(144,_19,_254,_0.1)]">
                Feedback
              </li>
              <li className="w-full cursor-pointer rounded-[8px] border-none px-4 py-2 text-start hover:bg-[rgba(144,_19,_254,_0.1)]">
                Support
              </li>
              <li
                onClick={() => logout()}
                className="cursor-pointer rounded-[8px] px-4 py-2 hover:bg-[rgba(255,_107,_107,_0.1)] hover:text-primary-red"
              >
                {isPending ? "logging out..." : "Log out"}
              </li>
            </ul>
          </DialogPrimitive.Content>
        </DialogPortal>
      </Dialog>
    </aside>
  );
}
