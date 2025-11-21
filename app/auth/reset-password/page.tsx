import type { Metadata } from "next";
import ResetPasswordPage from "@/components/pages/auth/ResetPasswordPage";

export const metadata: Metadata = {
  title: "Reset Password | LB Films",
  description: "Create a new password for your LB Films account.",
};

export default function Page() {
  return <ResetPasswordPage />;
}
