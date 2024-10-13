import { Request, Response } from 'express';
import bcrypt from 'bcrypt';
import { generateToken } from '../utils/jwt.util';
import { pool } from '../db';  // Assuming you have a Postgres connection pool

export const register = async (req: Request, res: Response) => {
    const { username, email, password } = req.body;
    
    try {
      // Check if user already exists
      const userCheck = await pool.query('SELECT * FROM users WHERE email = $1 OR username = $2', [email, username]);
      if ((userCheck.rowCount as number) > 0) {
        return res.status(400).json({ message: 'Username or Email already exists' });
      }
  
      // Hash password and save user
      const hashedPassword = await bcrypt.hash(password, 10);
      await pool.query(
        'INSERT INTO users (username, email, password) VALUES ($1, $2, $3)',
        [username, email, hashedPassword]
      );
  
      res.status(201).json({ message: 'User registered successfully' });
    } catch (error) {
      console.error('Error during registration:', error);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  };

  export const login = async (req: Request, res: Response) => {
    const { email, password } = req.body;
  
    // Fetch the user from the database based on email
    const user = await pool.query('SELECT * FROM users WHERE email = $1', [email]);
  
    if (user.rowCount === 0) {
      return res.status(400).json({ message: 'User not found' });
    }
  
    const isPasswordValid = await bcrypt.compare(password, user.rows[0].password);
    if (!isPasswordValid) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }
  
    // Generate JWT token with full user data
    const token = generateToken({
      id: user.rows[0].id,
      username: user.rows[0].username,
      email: user.rows[0].email,
    });
  
    // Set token in cookie
    res.cookie('token', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      maxAge: 3600000,  // Token expiration (1 hour)
      sameSite: 'strict',
    });
  
    return res.status(200).json({ message: 'Login successful' });
  };

// Get the current authenticated user

export const getMe = (req: Request, res: Response) => {
    // Check if the user is attached by the authMiddleware
    const user = req.user;
  
    console.log('User from req.user:', user);  // Debugging log
  
    if (!user) {
      return res.status(401).json({ message: 'Unauthorized' });
    }
  
    return res.status(200).json({ id: user.id, username: user.username, email: user.email });
};