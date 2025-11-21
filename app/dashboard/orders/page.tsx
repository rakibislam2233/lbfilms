import type { Metadata } from "next";
import OrdersPage from "@/components/pages/dashboard/OrdersPage";

export const metadata: Metadata = {
  title: "My Orders | LB Films",
  description: "View and track your LB Films orders and bookings.",
};

export default function Page() {
  return <OrdersPage />;
}
