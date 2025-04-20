'use client'
import { Button } from "./ui/button";
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "./ui/dialog";
import { Input } from "./ui/input";
import { read, utils, readFile, writeFile } from 'xlsx';
import { addUsersBatchAction } from "@/data/addUsersBatchAction";
import { ExcelUser } from "@/data/person";

let fileContent: string | ArrayBuffer | null | undefined


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
                        <Input onChange={handleFileChange} type="file"></Input>
                    </div>
                </div>
                <DialogFooter>
                    <DialogClose asChild>
                        <Button onClick={processFile} type="submit">Import</Button>
                    </DialogClose>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}
function handleFileChange(event: React.ChangeEvent<HTMLInputElement>) {
    const file1 = event.target.files?.[0]
    if (!file1) {
        return;
    }
    const reader = new FileReader();
      reader.onload = (e) => {
        fileContent = e.target?.result;
      };
      reader.readAsArrayBuffer(file1); // Or any other reading method based on the file type (e.g., readAsDataURL for images)
}

function processFile() {
    if (!fileContent) {
        console.warn('no file selexted')
        return
    }
    try {
        const xlsx = read(fileContent)
        const sheet = xlsx.Sheets[xlsx.SheetNames[0]]
        const data = utils.sheet_to_json(sheet)
        const excelUsers: ExcelUser[] = data as ExcelUser[];
    if(!excelUsers) {
        console.error('excelUsers is undefined')
        return;
    }
    const values = excelUsers.map(user => [user.ID, user.Name, user.Email, user['Created At'].toString()]);
    const placeholders = values.map(() => '(?, ?, ?, ?)').join(', ');

    const query = `INSERT INTO users (id, name, email, created_at) VALUES ${placeholders}`;
        const flattenedValues = values.flat();
        addUsersBatchAction(query, flattenedValues);
    }
    catch (e) {
        console.error(e)
    }
}

export default ImportButton