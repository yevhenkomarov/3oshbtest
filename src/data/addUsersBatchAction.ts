'use server'

import { revalidatePath } from "next/cache";
import { ExcelUser } from "./person";
import pool from "@/database/localdb";

export async function addUsersBatchAction(query: string, flattenedValues: string[]) {
    
  
    try {
        await pool.query(query, flattenedValues);
    }
    catch(e) {
        console.warn(e)
    }
    revalidatePath('/');
}