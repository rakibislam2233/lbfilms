import Navbar from "@/components/Navbar";
import Footer from "@/components/pages/common/Footer";
import React from "react";

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main>
      <Navbar />
      {children}
      <Footer />
    </main>
  );
};

export default AuthLayout;
