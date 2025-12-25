import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import ShareIcon from "./icons/ShareIcon";
import StackIcon from "./icons/StackIcon";

export default function ShareDialogModal() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className="group flex items-center gap-2 rounded-full border-0 bg-primary-blue px-4 py-2 text-sm font-semibold text-secondary-purple transition-all duration-300 hover:bg-secondary-purple">
          <ShareIcon />
          <p className="group-hover:text-white">Share</p>
        </div>
      </DialogTrigger>
      <DialogContent className="flex w-[90%] max-w-sm flex-col items-center justify-center">
        <DialogHeader>
          <DialogTitle className="text-center text-2xl font-bold text-black">
            Share Your Stack
          </DialogTitle>
        </DialogHeader>

        {/* ACTUAL CONTENT */}
        <div className="flex h-[40px] w-[40px] items-center justify-center rounded-full bg-purple-bg4 text-[1rem] text-secondary-purple">
          <StackIcon />
        </div>
        <p className="text-center text-gray-600">
          You have no stack created yet, go to Tech Stack to create one.
        </p>
      </DialogContent>
    </Dialog>
  );
}
