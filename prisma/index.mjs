import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  await prisma.$connect();

  await prisma.project.create({
    data: {
      title: 'Pyrénées',
      isPublished: true,
      photos: {
        create: {
          source: '/public/pyr/abossenbroek-pyrenees-00001.webp',
          sequence: 1,
        },
      },
    },
  })

  await prisma.project.create({
    data: {
      title: '7 Rad',
      isPublished: true,
      photos: {
        create: {
          source: '/public/7rad/abossenbroek-7rad-00001.webp',
          sequence: 1,
        },
      },
    },
  })

  const allProjects = await prisma.project.findMany({
    include: {
      photos: true,
    },
  })
  // console.dir(allProjects, { depth: null })
}

main()
  .catch(async (e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })