import type { Metadata } from "next";
import RegisterPage from "@/components/pages/auth/RegisterPage";

export const metadata: Metadata = {
  title: "Register | LB Films",
  description:
    "Create your LB Films account to book photography sessions and manage orders.",
};

export default function Page() {
  return <RegisterPage />;
}
