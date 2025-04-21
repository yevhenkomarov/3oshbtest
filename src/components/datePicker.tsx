"use client"

import { format } from "date-fns"
import { CalendarIcon } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"
import { useState } from "react"

interface MyCustomFormProps {
    onDateChange: (date: Date) => void;
    currentDate: Date
}

export function DatePickerPopover({ onDateChange, currentDate }: MyCustomFormProps) {
    const [open, setOpen] = useState(false);
    const [displayDate, setDisplayDate] = useState(currentDate);

    const handleDateChange = (newDate: Date | undefined) => {
        if (newDate) {
            onDateChange(newDate);
            setDisplayDate(newDate);
            setOpen(false);
        }
    };

    return (
        <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger asChild>
                <Button
                    variant={"outline"}
                    className={cn(
                        "w-[240px] pl-3 text-left font-normal",
                        !displayDate && "text-muted-foreground"
                    )}
                >
                    {displayDate ? format(displayDate, "PPP") : "Pick a date"}
                    <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0" align="start">
                <Calendar
                    mode="single"
                    selected={displayDate}
                    onSelect={handleDateChange}
                    initialFocus
                />
            </PopoverContent>
        </Popover>
    )
}

export default DatePickerPopover