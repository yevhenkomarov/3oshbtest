'use client'
import { PersonData } from "@/data/person";
import { Button } from "./ui/button";
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "./ui/dialog";
import { Label } from "@radix-ui/react-label";
import { useState } from "react";
import { Input } from "./ui/input";
import { editUserData } from "@/data/editUserAction";
import { cn } from "@/lib/utils";
import { Popover, PopoverTrigger, PopoverContent } from "@radix-ui/react-popover";
import { CalendarIcon, Calendar } from "lucide-react";
import { format } from "path";
import { FormControl } from "./ui/form";

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
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="name" className="text-right">
                Name
              </Label>
              <Input id="name" className="col-span-3"
                value={personData.name}
                onChange={handleInputChange} />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="email" className="text-right">
                Email
              </Label>
              <Input id="email" className="col-span-3"
                value={personData.email}
                onChange={handleInputChange}/>
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="createdAt" className="text-right">
                Created at
              </Label>
              <Input id="created_at" className="col-span-3"
                value={new Date(person.created_at).toLocaleDateString()}
                onChange={handleInputChange}/>
                {/* <Popover>
                <PopoverTrigger asChild>
                  <FormControl>
                    <Button
                      variant={"outline"}
                      className={cn(
                        "w-[240px] pl-3 text-left font-normal",
                        !personData.created_at && "text-muted-foreground"
                      )}
                    >
                        <span>Pick a date</span>
                      <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                    </Button>
                  </FormControl>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <Calendar
                  />
                </PopoverContent>
              </Popover> */}
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