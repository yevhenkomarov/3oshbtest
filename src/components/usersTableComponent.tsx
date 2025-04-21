'use server'
import DeleteUserButton from "@/components/deleteUserComponent";
import EditUserButton from "@/components/editUserComponent";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { PersonData } from "@/data/person";
import pool from "@/database/localdb";

export default async function PeopleTable() {
    const users = await pool.query('SELECT * FROM users ORDER BY id');
    const testUsers = users[0] as PersonData[]
    // console.log(jsonData.data[0])
    return (
        <Table className="p-1">
            <TableHeader>
                <TableRow>
                    <TableHead className="w-[100px]">Id</TableHead>
                    <TableHead>Name</TableHead>
                    <TableHead>Email</TableHead>
                    <TableHead className="text-left">Created at</TableHead>
                    <TableHead className="text-left">Actions</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {
                    testUsers.map(user => (
                        <TableRow key={user.id}>
                            <TableCell className="font-medium">{user.id}</TableCell>
                            <TableCell className="font-medium">{user.name}</TableCell>
                            <TableCell className="font-medium">{user.email}</TableCell>
                            <TableCell className="font-medium">{new Date(user.created_at).toLocaleDateString()}</TableCell>
                            <TableCell>
                                <EditUserButton id={user.id} name={user.name} email={user.email} created_at={user.created_at}></EditUserButton>
                                <DeleteUserButton id={user.id} name={user.name}></DeleteUserButton>
                            </TableCell>
                        </TableRow>
                    ))
                }
            </TableBody>
        </Table>
    )
}
