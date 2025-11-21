import type { Metadata } from "next";
import OrderDetailPage from "@/components/pages/dashboard/OrderDetailPage";

export const metadata: Metadata = {
  title: "Order Details | LB Films",
  description: "View your order details and status.",
};

export default function Page() {
  return <OrderDetailPage />;
}
