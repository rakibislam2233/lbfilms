import type { Metadata } from "next";
import AdminProjectsPage from "@/components/pages/admin/AdminProjectsPage";

export const metadata: Metadata = {
  title: "Projects | Admin - LB Films",
  description: "Manage your photography projects.",
};

export default function Page() {
  return <AdminProjectsPage />;
}
