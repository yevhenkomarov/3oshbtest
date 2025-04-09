'use client'
import { Button } from "./ui/button";

function NewUserButton() {
    return <Button onClick={() => {
        console.log('add new user clicked')
    }}>Add new user</Button>
}

export default NewUserButton