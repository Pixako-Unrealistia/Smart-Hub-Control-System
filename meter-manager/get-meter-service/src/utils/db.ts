import dotenv from 'dotenv';
dotenv.config();
import { Pool } from 'pg';  

console.log(process.env.DATABASE_URL);
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,  
});

interface QueryParams {
  text: string;
  params?: (string | number | boolean | null)[]; 
}

export default {
  query: (text: string, params?: (string | number | boolean | null)[]) => pool.query(text, params),
};
