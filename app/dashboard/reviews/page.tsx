import type { Metadata } from "next";
import ReviewsPage from "@/components/pages/dashboard/ReviewsPage";

export const metadata: Metadata = {
  title: "My Reviews | LB Films",
  description: "View and manage your reviews on LB Films.",
};

export default function Page() {
  return <ReviewsPage />;
}
