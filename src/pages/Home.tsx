import { Link } from "react-router-dom";

export default function Home() {
  return (
    <article className="flex min-h-screen items-center justify-center">
      <Link
        className="rounded-lg bg-secondary-purple px-4 py-2 font-bold text-white shadow-sm transition-all duration-200 hover:-translate-y-[2px] hover:shadow-lg"
        to="/rewards"
      >
        Go to the rewards page
      </Link>
    </article>
  );
}
