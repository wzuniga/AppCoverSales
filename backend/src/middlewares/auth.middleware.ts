import { Request, Response, NextFunction } from 'express';
import { verifyToken } from '../utils/jwt';
import { createError } from './errorHandler';

export const authenticate = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    // Read JWT from cookies
    const token = req.cookies.token;

    // Return 401 if no token
    if (!token) {
      throw createError(401, 'Authentication required. No token provided.');
    }

    // Verify signature and expiration
    try {
      const decoded = verifyToken(token);
      
      // Attach adminId to request
      (req as any).admin = decoded;
      
      next();
    } catch (verifyError) {
      // Return 403 if token is invalid
      throw createError(403, 'Invalid or expired token');
    }
  } catch (error) {
    next(error);
  }
};
