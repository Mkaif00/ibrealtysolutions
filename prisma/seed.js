// prisma/seed.js
const { PrismaClient } = require('@prisma/client')
const bcrypt = require('bcryptjs')

const prisma = new PrismaClient()

async function main() {
  const password = await bcrypt.hash('admin123', 10)
  await prisma.admin.upsert({
    where: { email: 'admin@ibrealty.com' },
    update: {},
    create: { email: 'admin@ibrealty.com', password, name: 'Admin', role: 'admin' },
  })
  console.log('Admin created: admin@ibrealty.com / admin123')
}

main().finally(() => prisma.$disconnect())