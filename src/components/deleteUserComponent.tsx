'use client'
import { deleteUserAction } from "@/data/deleteUserAction"
import { Button } from "./ui/button"

function DeleteUserButton(params: {id: number, name: string}) {
    return (
        <Button onClick={async () => {
            deleteUserAction(params.id, params.name)
        }} className="size-min">Delete</Button>
    )
}


export default DeleteUserButton