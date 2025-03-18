// app/checkout/page.tsx
import { Suspense } from "react";
import CheckoutForm from "./checkoutform";

export default function CheckoutPage() {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <CheckoutForm />
    </Suspense>
  );
}