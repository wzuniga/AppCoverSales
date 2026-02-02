import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcryptjs';

const prisma = new PrismaClient();

async function main() {
  console.log('🌱 Starting database seeding...');

  // Check if admin already exists
  const existingAdmin = await prisma.admin.findUnique({
    where: { email: 'admin@caratulas.com' },
  });

  if (existingAdmin) {
    console.log('⚠️  Admin user already exists, skipping seed.');
    return;
  }

  // Hash password
  const hashedPassword = await bcrypt.hash('admin123', 10);

  // Create admin user
  const admin = await prisma.admin.create({
    data: {
      email: 'admin@caratulas.com',
      password: hashedPassword,
    },
  });

  console.log('✅ Admin user created:');
  console.log('   Email:', admin.email);
  console.log('   Password: admin123 (change this in production!)');
  console.log('   ID:', admin.id);
}

main()
  .catch((e) => {
    console.error('❌ Error seeding database:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
