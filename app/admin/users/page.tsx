import type { Metadata } from "next";
import AdminUsersPage from "@/components/pages/admin/AdminUsersPage";

export const metadata: Metadata = {
  title: "Users | Admin - LB Films",
  description: "Manage customers and admins.",
};

export default function Page() {
  return <AdminUsersPage />;
}
