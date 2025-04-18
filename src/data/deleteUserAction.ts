'use server'

import pool from '@/database/localdb';
import { revalidatePath } from 'next/cache';

export async function deleteUserAction(id: number, name: string) {
  await pool.query(`delete from users where id=? and name=?`, [id, name])
  revalidatePath('/');
}