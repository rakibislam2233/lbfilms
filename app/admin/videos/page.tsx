import type { Metadata } from "next";
import AdminVideosPage from "@/components/pages/admin/AdminVideosPage";

export const metadata: Metadata = {
  title: "Videos | Admin - LB Films",
  description: "Manage your video portfolio.",
};

export default function Page() {
  return <AdminVideosPage />;
}
