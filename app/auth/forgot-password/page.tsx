import type { Metadata } from "next";
import ForgotPasswordPage from "@/components/pages/auth/ForgotPasswordPage";

export const metadata: Metadata = {
  title: "Forgot Password | LB Films",
  description: "Reset your LB Films account password.",
};

export default function Page() {
  return <ForgotPasswordPage />;
}
