import type { Metadata } from "next";
import DashboardPage from "@/components/pages/dashboard/DashboardPage";

export const metadata: Metadata = {
  title: "Dashboard | LB Films",
  description: "View your bookings, orders, and manage your LB Films account.",
};

export default function Page() {
  return <DashboardPage />;
}
