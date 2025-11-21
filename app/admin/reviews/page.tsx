import type { Metadata } from "next";
import AdminReviewsPage from "@/components/pages/admin/AdminReviewsPage";

export const metadata: Metadata = {
  title: "Reviews | Admin - LB Films",
  description: "Manage customer reviews.",
};

export default function Page() {
  return <AdminReviewsPage />;
}
