import type { Metadata } from "next";
import AdminTestimonialsPage from "@/components/pages/admin/AdminTestimonialsPage";

export const metadata: Metadata = {
  title: "Testimonials | Admin - LB Films",
  description: "Manage customer testimonials.",
};

export default function Page() {
  return <AdminTestimonialsPage />;
}
