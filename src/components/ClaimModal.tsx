import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import GiftIcon from "./icons/GiftIcon";
import ChooseFileIcon from "./icons/ChooseFileIcon";

export function ClaimModal() {
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
      <DialogContent className="w-[90%] max-w-lg">
        <DialogHeader className="text-left">
          <DialogTitle className="text-lg font-bold">
            Claim Your 25 Points
          </DialogTitle>
          <DialogDescription>
            <div className="space-y-1 text-[.9rem] text-accent-gray">
              <p>
                Sign up for Reclaim (free, no payment needed), then fill the
                form below:
              </p>
              <ul>
                <li>1️⃣ Enter your Reclaim sign-up email.</li>
                <li>
                  2️⃣ Upload a screenshot of your Reclaim profile showing your
                  email.
                </li>
              </ul>
              <p>After verification, you&apos;ll get 25 Flowva Points! 🎉😊</p>
            </div>
          </DialogDescription>
        </DialogHeader>
        <article className="space-y-6">
          <div className="space-y-2">
            <Label
              htmlFor="email"
              className="text-right text-sm text-secondary-black opacity-80"
            >
              Email used on Reclaim
            </Label>
            <Input
              id="email"
              placeholder="user@example.com"
              className="rounded-md border border-secondary-white px-[14px] py-[20px] outline-none focus:border-secondary-purple"
            />
          </div>

          <div className="space-y-2">
            <Label
              htmlFor="file"
              className="text-right text-sm text-secondary-black opacity-80"
            >
              Upload screenshot (mandatory)
            </Label>
            <label
              htmlFor="file"
              className="flex cursor-pointer items-center justify-center gap-2 rounded-md border border-tertiary-white bg-gray-50 px-4 py-2 text-sm text-gray-600 transition-colors hover:bg-gray-100"
            >
              <ChooseFileIcon />
              Choose file
            </label>
            <Input id="file" type="file" className="hidden" />
          </div>
        </article>

        <article className="flex justify-end gap-4 ">
            <DialogClose asChild>
              <Button className="bg-tertiary-white font-semibold text-black transition-all duration-200 hover:bg-accent-white">
                Cancel
              </Button>
            </DialogClose>
            <Button
              className="bg-secondary-purple font-bold text-white transition-all duration-200 hover:bg-primary-red"
              type="submit"
            >
              Submit Claim
            </Button>
        </article>
      </DialogContent>
    </Dialog>
  );
}
