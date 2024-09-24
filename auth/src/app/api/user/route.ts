import { Pool } from 'pg';
import { NextResponse } from 'next/server';
import { hash } from 'bcrypt';
import * as z from 'zod';

// Define a schema for input validation
const userSchema = z
  .object({
    username: z.string().min(1, 'Username is required').max(100),
    email: z.string().min(1, 'Email is required').email('Invalid email'),
    password: z
      .string()
      .min(1, 'Password is required')
      .min(8, 'Password must have more than 8 characters'),
  });

// Initialize the Postgres pool
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { email, username, password } = userSchema.parse(body);

    // Check if email already exists
    const emailCheckQuery = 'SELECT * FROM "User" WHERE email = $1';
    const { rows: existingUserByEmail } = await pool.query(emailCheckQuery, [email]);

    if (existingUserByEmail.length > 0) {
      return NextResponse.json(
        { user: null, message: 'Email already exists' },
        { status: 409 }
      );
    }

    // Check if username already exists
    const usernameCheckQuery = 'SELECT * FROM "User" WHERE username = $1';
    const { rows: existingUserByUsername } = await pool.query(usernameCheckQuery, [username]);

    if (existingUserByUsername.length > 0) {
      return NextResponse.json(
        { user: null, message: 'Username already exists' },
        { status: 409 }
      );
    }

    // Hash the password
    const hashedPassword = await hash(password, 10);

    // Create the new user
    const createUserQuery = `
    INSERT INTO "User" (username, email, password, "createdAt", "updatedAt")
    VALUES ($1, $2, $3, NOW(), NOW())
    RETURNING id, username, email, "createdAt", "updatedAt";
  `;
    const { rows: newUser } = await pool.query(createUserQuery, [username, email, hashedPassword]);

    return NextResponse.json(
      { user: newUser[0], message: 'User created successfully' },
      { status: 201 }
    );
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: 'Something went wrong!' }, { status: 500 });
  }
}
