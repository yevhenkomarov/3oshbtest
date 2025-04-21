'use client'
import { PersonData } from "@/data/person";
import { Button } from "./ui/button";
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "./ui/dialog";
import { Label } from "@radix-ui/react-label";
import { useState } from "react";
import { Input } from "./ui/input";
import { editUserData } from "@/data/editUserAction";
import React from "react";
import DatePickerPopover from "./datePicker";

function EditUserButton(person: PersonData) {
    const [personData, setFormData] = useState({
        id: person.id,
        name: person.name,
        email: person.email,
        created_at: person.created_at
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
                <Button variant="outline">edit</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle>Edit user data</DialogTitle>
                    <DialogDescription>
                        Edit the desired fields.
                    </DialogDescription>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                    <div className="grid grid-cols-4 items-center padding-20">
                        <Label htmlFor="name" className="text-right">
                            Name
                        </Label>
                        <Input id="name" className="col-span-3"
                            value={personData.name}
                            onChange={handleInputChange} />
                    </div>
                    <div className="grid grid-cols-4 items-center padding-20">
                        <Label htmlFor="email" className="text-right">
                            Email
                        </Label>
                        <Input id="email" className="col-span-3"
                            value={personData.email}
                            onChange={handleInputChange} />
                    </div>
                    <div className="grid grid-cols-4 items-center padding-20">
                        <Label htmlFor="createdAt" className="text-right">Created at</Label>
                        <DatePickerPopover onDateChange={function (date: Date): void {
                            personData.created_at = date;
                            console.log(date);
                        }} currentDate={person.created_at}></DatePickerPopover>
                    </div>
                </div>
                <DialogFooter>
                    <DialogClose asChild>
                        <Button onClick={() => editUserData(personData)} type="submit">Save changes</Button>
                    </DialogClose>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}

export default EditUserButton