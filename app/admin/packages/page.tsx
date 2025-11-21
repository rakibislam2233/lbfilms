import type { Metadata } from "next";
import AdminPackagesPage from "@/components/pages/admin/AdminPackagesPage";

export const metadata: Metadata = {
  title: "Packages | Admin - LB Films",
  description: "Manage photography packages.",
};

export default function Page() {
  return <AdminPackagesPage />;
}
