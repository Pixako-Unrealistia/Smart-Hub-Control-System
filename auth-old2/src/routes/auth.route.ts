import { Router, Request, Response, NextFunction } from 'express';
import { register, login, getMe } from '../controller/auth.controller';
import { authMiddleware } from '../middleware/auth.middleware';

const router = Router();

// Register route
router.post('/register', async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    await register(req, res);
    next();
  } catch (error) {
    next(error);
  }
});

// Login route
router.post('/login', async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    await login(req, res);
    next();
  } catch (error) {
    next(error);
  }
});

// Protected route to get the current user's data
router.get('/me', authMiddleware, async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    await getMe(req, res);
    next();
  } catch (error) {
    next(error);
  }
});

// Logout route
router.post('/logout', (req: Request, res: Response): void => {
  res.clearCookie('token', {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'strict',
  });
  res.status(200).json({ message: 'Logged out successfully' });
});

export default router;
