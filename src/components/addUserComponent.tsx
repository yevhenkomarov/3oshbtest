'use client'

import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { DialogClose } from "@radix-ui/react-dialog"
import { useState } from "react"
import { addUserAction } from "@/data/addUserAction"
import DatePickerPopover from "./datePicker"

function NewUserButton() {
  const [formData, setFormData] = useState({
    id: 0,
    name: '',
    email: '',
    created_at: new Date()
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [id]: value
    }));
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Add user</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Add new user</DialogTitle>
          <DialogDescription>
            Fill the data for new user. Click save when you are done.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center padding-20">
            <Label htmlFor="name" className="text-right">
              Name
            </Label>
            <Input id="name" className="col-span-3"
              value={formData.name}
              onChange={handleInputChange} />
          </div>
          <div className="grid grid-cols-4 items-center padding-20">
            <Label htmlFor="email" className="text-right">
              Email
            </Label>
            <Input id="email" className="col-span-3"
              value={formData.email}
              onChange={handleInputChange} />
          </div>
          <div className="grid grid-cols-4 items-center padding-20">
            <Label htmlFor="createdAt" className="text-right">
              Created at
            </Label>
              <DatePickerPopover onDateChange={function (date: Date): void {
                                          formData.created_at = date;
                                          console.log(formData.created_at);
                                      }} currentDate={formData.created_at}></DatePickerPopover>
          </div>
        </div>
        <DialogFooter>
          <DialogClose asChild>
            <Button onClick={() => addUserAction(formData)} type="submit">Save changes</Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

export default NewUserButton