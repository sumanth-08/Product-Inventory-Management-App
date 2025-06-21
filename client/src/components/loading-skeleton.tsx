import { Skeleton } from "./ui/skeleton";

function LoadingSkeleton() {
  return (
    <div className="space-y-6">
        <Skeleton className="h-[600px] w-full rounded-lg" />
    </div>
  );
}

export default LoadingSkeleton;
