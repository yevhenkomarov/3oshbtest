import pool from "@/database/dbconnection";
import { NextResponse } from "next/server";

type TestUser = {
    id: number,
    name: string,
    email: string,
    created_at: Date
}


export async function GET(request: Request) {
    const result = await pool.query('SELECT * FROM users ORDER BY id')
    console.log(result)
    return NextResponse.json({
        success: true,
        data: result
    }, { status: 200 });
}

export async function POST(request: Request) {
    const json = await request.json()
    const user = json as TestUser
    user.id = Date.now()
    user.created_at = new Date()
    console.log(json)
    await pool.query('INSERT INTO users (id, name, email, created_at) VALUES (?, ?, ?, ?)', [user.id, user.name, user.email, user.created_at])
    return NextResponse.json({
        success: true,
        data: user
    }, { status: 200 });
}

export async function DELETE(request: Request) {
    const {id, name} = await request.json()
    console.log(name + ' removed')
    await pool.query(`delete from users where id=? and name=?`, [id, name])
    return NextResponse.json({
        success: true,
        data: `user with name: ${name} has been removed`
    }, { status: 200 });
}


// export const GET = async (req: Request, res: Response) => {
//     const result = await pool.query('SELECT * FROM users ORDER BY id')
//     console.log(result)
// }

// export async function handle(query: string) {
//     const res = await pool.query(query)
//     console.log(res)
// }