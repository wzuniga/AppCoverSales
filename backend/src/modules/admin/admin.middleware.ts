import { Request, Response, NextFunction } from 'express';
import { verifyToken } from '../../utils/jwt';
import { createError } from '../../middlewares/errorHandler';

export const authenticateAdmin = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    // Get token from cookie or Authorization header
    const token = req.cookies.token || req.headers.authorization?.replace('Bearer ', '');

    if (!token) {
      throw createError(401, 'Authentication required');
    }

    // Verify token
    const decoded = verifyToken(token);

    // Attach admin info to request
    (req as any).admin = decoded;

    next();
  } catch (error) {
    next(createError(401, 'Invalid or expired token'));
  }
};
