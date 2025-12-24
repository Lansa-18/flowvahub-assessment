import GiftIcon from "./icons/GiftIcon";
import { Button } from "./ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";

export default function LevelUpModal() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          variant="ghost"
          className="rounded-full !bg-purple-red-gradient !text-white tab-land:w-full"
        >
          <GiftIcon />
          Claim 50 pts
        </Button>
      </DialogTrigger>
      <DialogContent className="flex w-[28%] flex-col items-center justify-center">
        <DialogHeader>
          <DialogTitle className="flex flex-col items-center">
            <div className="mb-2 h-[98px] w-[98px] text-green-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                <polyline points="22 4 12 14.01 9 11.01"></polyline>
              </svg>
            </div>
            <h2 className="mb-[10px] text-center text-[24px] font-bold text-secondary-purple">
              Level Up! 🎉
            </h2>
            <h3 className="my-3 bg-gradient-to-br from-secondary-purple to-[#FF9FF5] bg-clip-text text-center text-[36px] font-extrabold text-transparent [text-shadow:1px_1px_3px_rgba(0,0,0,0.1)]">
              +5 Points
            </h3>
          </DialogTitle>
        </DialogHeader>

        {/* ACTUAL CONTENT */}
      </DialogContent>
    </Dialog>
  );
}
