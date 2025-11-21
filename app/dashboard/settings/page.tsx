import type { Metadata } from "next";
import SettingsPage from "@/components/pages/dashboard/SettingsPage";

export const metadata: Metadata = {
  title: "Settings | LB Films",
  description: "Manage your LB Films account settings and preferences.",
};

export default function Page() {
  return <SettingsPage />;
}
