import type { Metadata } from "next";
import VerifyOtpPage from "@/components/pages/auth/VerifyOtpPage";

export const metadata: Metadata = {
  title: "Verify Email | LB Films",
  description: "Verify your email address to complete registration.",
};

export default function Page() {
  return <VerifyOtpPage />;
}
