import type { Metadata } from "next";
import EditProfilePage from "@/components/pages/dashboard/EditProfilePage";

export const metadata: Metadata = {
  title: "Edit Profile | LB Films",
  description: "Update your LB Films profile information.",
};

export default function Page() {
  return <EditProfilePage />;
}
