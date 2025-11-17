import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "LB Films - User Dashboard",
  description: "User dashboard for LB Films photography & videography services",
};

export default function UserLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-screen bg-secondary-50">
      <main className="flex-1 overflow-y-auto">{children}</main>
    </div>
  );
}
