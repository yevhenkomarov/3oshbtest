'use client'

import { PersonData } from "@/app/data/person"
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



function NewUserButton() {

  const [formData, setFormData] = useState({
    id: '',
    name: '',
    email: '',
    created_at: ''
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
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="id" className="text-right">
              ID
            </Label>
            <Input id="id" className="col-span-3"
              value={formData.id}
              onChange={handleInputChange} />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Name
            </Label>
            <Input id="name" className="col-span-3"
              value={formData.name}
              onChange={handleInputChange} />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="email" className="text-right">
              Email
            </Label>
            <Input id="email" className="col-span-3"
              value={formData.email}
              onChange={handleInputChange} />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="createdAt" className="text-right">
              Created at
            </Label>
            <Input id="created_at" className="col-span-3"
              value={formData.created_at}
              onChange={handleInputChange} />
          </div>
        </div>
        <DialogFooter>
          <DialogClose asChild>
            <Button onClick={() => submitData(formData)} type="submit">Save changes</Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

async function submitData(data: PersonData) {
  await fetch(`http://localhost:3000/api/users/`, { method: 'POST', body: JSON.stringify(data) })
  console.log('submit ' + data);
}


export default NewUserButton