"use client";

import { format } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";

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
}

export function DatePicker({ date, setDate, className }: DatePickerProps) {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant={"outline"}
          className={cn(
            "w-full justify-start text-left font-normal h-12 px-4",
            "bg-white/5 border-white/10 hover:bg-white/10 hover:border-purple-500/50",
            "transition-all duration-200",
            !date && "text-gray-400",
            date && "text-white",
            className
          )}
        >
          <CalendarIcon className="mr-3 h-5 w-5 text-purple-400" />
          {date ? (
            <span className="text-white font-medium">{format(date, "PPP")}</span>
          ) : (
            <span className="text-gray-400">Select date</span>
          )}
        </Button>
      </PopoverTrigger>
      <PopoverContent 
        className="w-auto p-0 bg-gray-900 border-white/10"
        align="start"
      >
        <Calendar
          mode="single"
          selected={date}
          onSelect={setDate}
          initialFocus
        />
      </PopoverContent>
    </Popover>
  );
}