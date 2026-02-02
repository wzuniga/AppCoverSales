import { Router } from 'express';
import { AdminController } from './admin.controller';
import { authenticateAdmin } from './admin.middleware';
import { authenticate } from '../../middlewares/auth.middleware';
import { authLimiter } from '../../middlewares/rateLimit';

const router = Router();
const adminController = new AdminController();

// Public routes
router.post('/login', authLimiter, (req, res, next) =>
  adminController.login(req, res, next)
);

// Protected routes
router.get('/me', authenticate, (req, res, next) =>
  adminController.getMe(req, res, next)
);

router.get('/profile', authenticateAdmin, (req, res, next) =>
  adminController.getProfile(req, res, next)
);

router.post('/logout', authenticateAdmin, (req, res, next) =>
  adminController.logout(req, res, next)
);

export default router;
