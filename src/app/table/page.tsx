import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import db from "@/database/db";

type TestUser = {
    id: number,
    name: string,
    email: string,
    created_at: Date
}

export default async function PeopleTable() {
    const response = await db.query('SELECT * FROM test_users ORDER BY id');
    const testUsers = response[0] as TestUser[]
    console.log(testUsers[0])
    console.log(testUsers[0].created_at)
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
                            <TableCell className="font-medium">{user.created_at.toISOString()}</TableCell>
                        </TableRow>
                    ))
                }
            </TableBody>
        </Table>
    )
}