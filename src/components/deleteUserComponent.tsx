'use client'
import { Button } from "./ui/button"

function DeleteUserButton(params: {id: number, name: string}) {
    return (
        <Button onClick={async () => {
            await fetch(`http://localhost:3000/api/users/`, {method: 'DELETE', body: JSON.stringify({id: params.id, name: params.name})})
            // pool.query(`delete from test_users.users where id=${params.id} and name=${params.name}`)
        }} className="size-min">Delete</Button>
    )
}


export default DeleteUserButton