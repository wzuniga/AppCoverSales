import { Request, Response, NextFunction } from 'express';
import { AdminService } from './admin.service';
import { loginSchema } from './admin.schema';
import { JWT_COOKIE_OPTIONS } from '../../utils/jwt';

const adminService = new AdminService();

export class AdminController {
  async login(req: Request, res: Response, next: NextFunction) {
    try {
      // Validate request body
      const validatedData = loginSchema.parse(req.body);

      // Perform login
      const result = await adminService.login(validatedData);

      // Set HTTP-only cookie with JWT options
      res.cookie('token', result.token, JWT_COOKIE_OPTIONS);

      res.status(200).json({
        success: true,
        message: 'Login successful',
        data: {
          admin: result.admin,
          token: result.token,
        },
      });
    } catch (error) {
      next(error);
    }
  }

  async getMe(req: Request, res: Response, next: NextFunction) {
    try {
      const adminId = (req as any).admin.adminId;
      const admin = await adminService.getProfile(adminId);

      res.status(200).json({
        success: true,
        data: {
          email: admin.email,
        },
      });
    } catch (error) {
      next(error);
    }
  }

  async getProfile(req: Request, res: Response, next: NextFunction) {
    try {
      const adminId = (req as any).admin.adminId;
      const admin = await adminService.getProfile(adminId);

      res.status(200).json({
        success: true,
        data: admin,
      });
    } catch (error) {
      next(error);
    }
  }

  async logout(req: Request, res: Response, next: NextFunction) {
    try {
      res.clearCookie('token');
      
      res.status(200).json({
        success: true,
        message: 'Logout successful',
      });
    } catch (error) {
      next(error);
    }
  }
}
