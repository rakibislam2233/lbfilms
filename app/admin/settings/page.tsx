import type { Metadata } from "next";
import AdminSettingsPage from "@/components/pages/admin/AdminSettingsPage";

export const metadata: Metadata = {
  title: "Settings | Admin - LB Films",
  description: "Manage site settings and preferences.",
};

export default function Page() {
  return <AdminSettingsPage />;
}
