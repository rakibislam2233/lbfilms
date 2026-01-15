"use client";

import { format } from "date-fns";
import { Calendar as CalendarIcon, ChevronDown } from "lucide-react";
import * as React from "react";

import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";

interface DatePickerProps {
  date?: Date;
  setDate: (date: Date | undefined) => void;
  className?: string;
  placeholder?: string;
}

export function DatePicker({ date, setDate, className, placeholder = "Select date" }: DatePickerProps) {
  const [open, setOpen] = React.useState(false);

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant={"outline"}
          className={cn(
            "w-full justify-between text-left font-normal h-12 px-4",
            "bg-white/5 border-white/10 hover:bg-white/10 hover:border-purple-500/50",
            "transition-all duration-200",
            !date && "text-gray-400",
            date && "text-white",
            className
          )}
        >
          <div className="flex items-center gap-3">
            <CalendarIcon className="h-5 w-5 text-purple-400" />
            {date ? (
              <span className="text-white font-medium">{format(date, "PPP")}</span>
            ) : (
              <span className="text-gray-400">{placeholder}</span>
            )}
          </div>
          <ChevronDown className="h-4 w-4 text-gray-400" />
        </Button>
      </PopoverTrigger>
      <PopoverContent 
        className="w-auto p-0 bg-gray-900 border-white/10 overflow-hidden"
        align="start"
      >
        <Calendar
          mode="single"
          selected={date}
          onSelect={(selectedDate) => {
            setDate(selectedDate);
            if (selectedDate) {
              setOpen(false);
            }
          }}
          captionLayout="dropdown"
          fromYear={1900}
          toYear={2100}
          initialFocus
        />
      </PopoverContent>
    </Popover>
  );
}