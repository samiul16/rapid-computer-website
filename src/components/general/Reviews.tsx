import React from "react";

const RatingBar = ({ label, value }: { label: string; value: number }) => (
  <div className="flex items-center gap-2">
    <span className="w-40 text-sm text-neutral-700">{label}</span>
    <div className="flex-1 h-2 bg-neutral-200 rounded-full overflow-hidden">
      <div className="h-2 bg-sky-500" style={{ width: `${(value / 5) * 100}%` }} />
    </div>
    <span className="text-sm text-neutral-700">{value.toFixed(1)}</span>
  </div>
);

const ReviewCard = () => (
  <div className="border-b py-4 flex flex-col gap-3">
    <div className="flex justify-between items-center">
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 bg-orange-700 rounded-full flex items-center justify-center text-white">
          H
        </div>
        <div>
          <p className="text-xs font-semibold">H***s</p>
          <p className="text-xs text-neutral-500">Singapore</p>
        </div>
      </div>
      <span className="text-xs text-neutral-500">Dec 16, 2024</span>
    </div>
    <p className="text-sm text-neutral-800">
      Service is Top Notch. Delivery was fast. Within a week, we received…
      <button className="text-blue-600 text-sm underline ml-1">Show all</button>
    </p>
    <div className="bg-zinc-100 p-3 rounded">
      <p className="text-sm font-semibold">Supplier reply:</p>
      <p className="text-sm">Thank you for your great feedback!…</p>
    </div>
  </div>
);

export default function Reviews() {
  return (
    <div className="border-t pt-10">
      <h2 className="text-xl font-bold text-neutral-800 mb-6">Ratings & Reviews</h2>

      {/* Rating summary */}
      <div className="flex gap-10">
        <div>
          <p className="text-5xl font-bold">5.0</p>
          <p className="text-sm text-neutral-500">Based on 2 verified purchases</p>
        </div>
        <div className="flex-1 space-y-3">
          <RatingBar label="Supplier service" value={5} />
          <RatingBar label="On-time shipment" value={5} />
          <RatingBar label="Product quality" value={5} />
        </div>
      </div>

      {/* Reviews list */}
      <div className="mt-8 space-y-6">
        <ReviewCard />
        <ReviewCard />
      </div>
    </div>
  );
}
