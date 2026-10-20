export default function ProductSkeleton() {
  return (
    <div className="rounded-lg border p-4 shadow-sm animate-pulse space-y-3">
      <div className="h-6 bg-gray-200 rounded w-3/4" />
      <div className="h-5 bg-gray-200 rounded w-1/2" />
      <div className="h-10 bg-gray-200 rounded w-1/3" />
    </div>
  );
}