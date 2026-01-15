"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import * as React from "react";
import { DayPicker } from "react-day-picker";

import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export type CalendarProps = React.ComponentProps<typeof DayPicker>;

function Calendar({
  className,
  classNames,
  showOutsideDays = true,
  ...props
}: CalendarProps) {
  return (
    <DayPicker
      showOutsideDays={showOutsideDays}
      className={cn("p-4", className)}
      classNames={{
        months: "flex flex-col sm:flex-row space-y-4 sm:space-x-4 sm:space-y-0",
        month: "space-y-4",
        caption: "flex justify-center pt-1 relative items-center mb-2",
        caption_label: "text-base font-semibold text-white",
        caption_dropdowns: "flex gap-2 items-center",
        dropdown: "bg-white/5 border border-white/10 text-white rounded-lg px-3 py-2 text-sm font-medium hover:bg-white/10 hover:border-purple-500/50 transition-all focus:outline-none focus:ring-2 focus:ring-purple-500/50",
        dropdown_icon: "ml-2 text-gray-400",
        vhidden: "sr-only",
        nav: "space-x-1 flex items-center",
        nav_button: cn(
          buttonVariants({ variant: "outline" }),
          "h-8 w-8 bg-white/5 border-white/10 p-0 text-gray-400 hover:text-white hover:bg-white/10 hover:border-purple-500/50 transition-all"
        ),
        nav_button_previous: "absolute left-1",
        nav_button_next: "absolute right-1",
        table: "w-full border-collapse space-y-1",
        head_row: "flex mb-2",
        head_cell:
          "text-gray-400 rounded-md w-10 font-semibold text-sm uppercase",
        row: "flex w-full mt-2",
        cell: cn(
          "relative h-10 w-10 text-center text-sm p-0",
          "focus-within:relative focus-within:z-20",
          "[&:has([aria-selected])]:bg-purple-500/10",
          "[&:has([aria-selected].day-outside)]:bg-purple-500/5"
        ),
        day: cn(
          buttonVariants({ variant: "ghost" }),
          "h-10 w-10 p-0 font-normal text-gray-300 hover:bg-white/10 hover:text-white transition-all rounded-lg",
          "aria-selected:opacity-100"
        ),
        day_range_end: "day-range-end",
        day_selected:
          "bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:from-purple-700 hover:to-pink-700 hover:text-white focus:from-purple-700 focus:to-pink-700 focus:text-white font-semibold shadow-lg shadow-purple-500/20",
        day_today: "bg-white/10 text-white font-semibold border border-purple-500/30",
        day_outside:
          "day-outside text-gray-600 opacity-50 aria-selected:bg-purple-500/5 aria-selected:text-gray-500 aria-selected:opacity-30",
        day_disabled: "text-gray-700 opacity-30 cursor-not-allowed",
        day_range_middle:
          "aria-selected:bg-purple-500/10 aria-selected:text-white",
        day_hidden: "invisible",
        ...classNames,
      }}
      components={{
        Chevron: ({ orientation }) => {
          if (orientation === "left") {
            return <ChevronLeft className="h-5 w-5" />;
          }
          return <ChevronRight className="h-5 w-5" />;
        },
      }}
      {...props}
    />
  );
}
Calendar.displayName = "Calendar";

export { Calendar };
