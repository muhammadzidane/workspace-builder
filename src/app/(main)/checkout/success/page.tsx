import { Metadata } from "next";

import { Card } from "@/app/_components";

import { ActionButtons } from "./_components";
import { meta } from "./_lib/meta";

export const metadata: Metadata = meta;

const CheckoutSuccessPage = () => {
  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center p-6">
      <div className="w-full max-w-2xl flex flex-col gap-6 text-center">
        {/* Success Icon */}
        <div className="text-5xl">✅</div>

        {/* Title */}
        <h1 className="text-2xl font-semibold text-slate-800">
          Checkout Successful
        </h1>

        {/* Description */}
        <p className="text-slate-600">
          Thank you! Your payment has been successfully processed. Your order is
          being prepared and will be processed shortly.
        </p>

        {/* Info Card */}
        <Card className="text-left flex flex-col gap-2">
          <p className="font-semibold text-slate-800">Order Information</p>
          <p className="text-sm text-slate-600">• Status: Processing</p>
          <p className="text-sm text-slate-600">
            • Estimated: Will be confirmed by our team
          </p>
          <p className="text-sm text-slate-600">
            • Email: A notification will be sent to your email
          </p>
        </Card>

        {/* Actions */}
        <ActionButtons />
      </div>
    </div>
  );
};

export default CheckoutSuccessPage;
