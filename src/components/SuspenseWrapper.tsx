import { Suspense } from "react";
import Spinner from "./Spinner";

// Wrapper component for lazy loaded routes
export const SuspenseWrapper = ({ children }: { children: React.ReactNode }) => (
  <Suspense
    fallback={
      <div className="flex min-h-screen items-center justify-center">
        <Spinner />
      </div>
    }
  >
    {children}
  </Suspense>
);
