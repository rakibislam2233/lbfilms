import type { Metadata } from "next";
import AdminOrdersPage from "@/components/pages/admin/AdminOrdersPage";

export const metadata: Metadata = {
  title: "Orders | Admin - LB Films",
  description: "Manage bookings and orders.",
};

export default function Page() {
  return <AdminOrdersPage />;
}
