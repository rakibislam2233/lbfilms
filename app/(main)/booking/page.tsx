import BookingPage from "@/components/pages/main/Booking/BookingPage";
import React, { Suspense } from "react";

const page = () => {
  return (
    <Suspense fallback={<div className="min-h-screen bg-background" />}>
      <BookingPage />
    </Suspense>
  );
};

export default page;
