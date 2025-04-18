'use client'
import { Button } from "./ui/button";
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "./ui/dialog";
import { Input } from "./ui/input";

export function ImportButton() {
    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button variant="outline">IMPORT BUTTON</Button>
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Import users</DialogTitle>
                    <DialogDescription>
                        Import users from excel file
                    </DialogDescription>
                </DialogHeader>
                <div>
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Input type="file"></Input>
                    </div>
                </div>
                <DialogFooter>
                    <DialogClose asChild>
                        <Button onClick={() => console.log('send processed items to server and update table')} type="submit">Import</Button>
                    </DialogClose>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}

export default ImportButton