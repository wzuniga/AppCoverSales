import { prisma } from '../../prisma/client';
import { comparePassword } from '../../utils/hash';
import { generateToken } from '../../utils/jwt';
import { createError } from '../../middlewares/errorHandler';
import { LoginInput } from './admin.schema';

export class AdminService {
  async login(data: LoginInput) {
    // Find admin by email
    const admin = await prisma.admin.findUnique({
      where: { email: data.email },
    });

    if (!admin) {
      throw createError(401, 'Invalid credentials');
    }

    // Verify password
    const isPasswordValid = await comparePassword(data.password, admin.password);

    if (!isPasswordValid) {
      throw createError(401, 'Invalid credentials');
    }

    // Generate JWT token
    const token = generateToken({
      adminId: admin.id,
      email: admin.email,
    });

    return {
      admin: {
        id: admin.id,
        email: admin.email,
        createdAt: admin.createdAt,
      },
      token,
    };
  }

  async getProfile(adminId: string) {
    const admin = await prisma.admin.findUnique({
      where: { id: adminId },
      select: {
        id: true,
        email: true,
        createdAt: true,
      },
    });

    if (!admin) {
      throw createError(404, 'Admin not found');
    }

    return admin;
  }
}
