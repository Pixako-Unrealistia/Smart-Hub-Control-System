import jwt from 'jsonwebtoken';

const JWT_SECRET = process.env.JWT_SECRET || 'secret';


// Generate JWT token for a user
export const generateToken = (user: { id: number, username: string, email: string }) => {
    return jwt.sign(
      {
        id: user.id,
        username: user.username,
        email: user.email,
      },
      JWT_SECRET,
      { expiresIn: '1h' }  // Token expiration time
    );
  };

export const verifyToken = (token: string) => {
  try {
    const decoded = jwt.verify(token, JWT_SECRET) as { id: number, username: string, email: string };
    console.log('Decoded JWT payload:', decoded);  // Log the decoded JWT payload for debugging
    return decoded;
  } catch (error) {
    console.error('Invalid token:', error);
    throw new Error('Invalid token');
  }
};