import { Router } from 'express';
import { register, login, getMe } from '../controller/auth.controller'; // Import the new `getMe` function
import { authMiddleware } from '../middleware/auth.middleware';  // Middleware to check JWT

const router = Router();

router.post('/register', register);
router.post('/login', login);

router.get('/me', authMiddleware, getMe);  // Protected route to get user data

router.post('/logout', (req, res) => {
    // Clear the 'token' cookie
    res.clearCookie('token', {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',  // Only secure in production
      sameSite: 'Strict',
    });
    return res.status(200).json({ message: 'Logged out successfully' });
  });
  
export default router;
