import "./globals.css";
import type { Metadata } from "next";
import { Overpass } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";

const poppins = Overpass({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "LB Films - Photography & Videography Services",
  description:
    "Professional photography and videography services in Bangladesh",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={poppins.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
