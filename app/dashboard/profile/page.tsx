import type { Metadata } from "next";
import ProfilePage from "@/components/pages/dashboard/ProfilePage";

export const metadata: Metadata = {
  title: "Profile | LB Films",
  description: "View and manage your LB Films profile.",
};

export default function Page() {
  return <ProfilePage />;
}
