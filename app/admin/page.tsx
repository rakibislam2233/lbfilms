import type { Metadata } from "next";
import AdminDashboard from "@/components/pages/admin/AdminDashboard";

export const metadata: Metadata = {
  title: "Admin Dashboard | LB Films",
  description: "LB Films Admin Dashboard - Manage orders, projects, and more.",
};

export default function AdminPage() {
  return <AdminDashboard />;
}
