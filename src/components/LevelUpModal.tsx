import { Dialog, DialogContent, DialogHeader, DialogTitle } from "./ui/dialog";

interface LevelUpModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function LevelUpModal({ isOpen, onClose }: LevelUpModalProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="flex w-[90%] max-w-sm flex-col items-center justify-center px-8">
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
            <p className="mb-[10px] text-center text-[24px] font-bold text-secondary-purple">
              Level Up! 🎉
            </p>
            <p className="my-5 bg-gradient-to-br from-secondary-purple to-[#FF9FF5] bg-clip-text text-center text-[36px] font-extrabold text-transparent [text-shadow:1px_1px_3px_rgba(0,0,0,0.1)]">
              +5 Points
            </p>
            <div className="mb-1 flex justify-center space-x-1">
              <span className="animate-bounce">✨</span>
              <span className="animate-bounce">💎</span>
              <span className="animate-bounce">🎯</span>
            </div>
            <p className="mb-[25px] text-center text-[15px] leading-[1.6] text-gray-500">
              You've claimed your daily points! Come back tomorrow for more!
            </p>
          </DialogTitle>
        </DialogHeader>

        {/* ACTUAL CONTENT */}
      </DialogContent>
    </Dialog>
  );
}
