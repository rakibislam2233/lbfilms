import type { Metadata } from "next";
import LoginPage from "@/components/pages/auth/LoginPage";

export const metadata: Metadata = {
  title: "Login | LB Films",
  description:
    "Sign in to your LB Films account to manage bookings and view your orders.",
};

export default function Page() {
  return <LoginPage />;
}
