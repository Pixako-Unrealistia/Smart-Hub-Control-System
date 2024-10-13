import { Request, Response, NextFunction } from 'express';
import { verifyToken } from '../utils/jwt.util';  // Your JWT verification function

export const authMiddleware = (req: Request, res: Response, next: NextFunction) => {
  const token = req.cookies.token;  // Extract the token from cookies

  if (!token) {
    return res.status(401).json({ message: 'Unauthorized' });
  }

  try {
    // Verify the token and attach the decoded user data to req.user
    const user = verifyToken(token);  // Log to check if user data is correct
    console.log('Decoded user from token in middleware:', user);  // Debugging log

    req.user = user;  // Attach the user object to the request
    next();  // Proceed to the next middleware or controller
  } catch (error) {
    console.error('Error verifying token:', error);
    return res.status(401).json({ message: 'Unauthorized' });
  }
};