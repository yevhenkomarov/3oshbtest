'use server'
import DeleteUserButton from "@/components/deleteUserComponent";
import EditUserButton from "@/components/editUserComponent";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { PersonData } from "@/data/person";

export default async function PeopleTable() {
    const response: Response = await fetch(`http://localhost:3000/api/users/`)
    const jsonData = await response.json()
    const testUsers = jsonData.data[0] as PersonData[]
    // console.log(jsonData.data[0])
    return (
        <Table className="p-1">
            <TableHeader>
                <TableRow>
                    <TableHead className="w-[100px]">Id</TableHead>
                    <TableHead>Name</TableHead>
                    <TableHead>Email</TableHead>
                    <TableHead className="text-right">Created at</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {
                    testUsers.map(user => (
                        <TableRow key={user.id}>
                            <TableCell className="font-medium">{user.id}</TableCell>
                            <TableCell className="font-medium">{user.name}</TableCell>
                            <TableCell className="font-medium">{user.email}</TableCell>
                            <TableCell className="font-medium">{user.created_at.toString()}</TableCell>
                            <TableCell>
                                <EditUserButton id={user.id} name={user.name} email={user.email} created_at={user.created_at}></EditUserButton>
                            </TableCell>
                            <TableCell>
                                <DeleteUserButton id={user.id} name={user.name}></DeleteUserButton>
                            </TableCell>
                        </TableRow>
                    ))
                }
            </TableBody>
        </Table>
    )
}