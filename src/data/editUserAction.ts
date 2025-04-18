'use server'

import pool from "@/database/localdb";
import { PersonData } from "./person";
import { revalidatePath } from "next/cache";

export async function editUserData(person: PersonData) {
    console.log('update ' + person.id)
    try {
        await pool.query('UPDATE users SET name = ?, email = ?, created_at = ? WHERE id = ?', [person.name, person.email, new Date(person.created_at), person.id])
    }
    catch(e) {
        console.error(e)
    }

      revalidatePath('/');
}