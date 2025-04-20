'use server'

import pool from '@/database/localdb';
import { revalidatePath } from 'next/cache';
import { PersonData } from './person';

export async function addUserAction(user: PersonData) {
  await pool.query('INSERT INTO users (id, name, email, created_at) VALUES (?, ?, ?, ?)', [Date.now(), user.name, user.email, new Date(user.created_at)])
  revalidatePath('/');
}