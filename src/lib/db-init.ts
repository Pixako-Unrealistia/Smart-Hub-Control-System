import { Pool } from 'pg';

// Initialize the Postgres pool
export const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

async function initTables() {
  try {
    // Create the "User" table if it doesn't exist
    const createUserTableQuery = `
      CREATE TABLE IF NOT EXISTS "User" (
        id SERIAL PRIMARY KEY,
        email VARCHAR(255) UNIQUE NOT NULL,
        username VARCHAR(100) UNIQUE NOT NULL,
        password VARCHAR(255) NOT NULL,
        "createdAt" TIMESTAMP DEFAULT NOW(),
        "updatedAt" TIMESTAMP DEFAULT NOW()
      );
    `;
    
    await pool.query(createUserTableQuery);
    console.log('User table created or already exists.');
  } catch (error) {
    console.error('Error creating tables:', error);
    throw error;
  }
}

export async function initDB() {
  await initTables();
}
