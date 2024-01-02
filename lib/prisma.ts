import { PrismaClient, Project } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  // ... you will write your Prisma Client queries here
  const getProjects: Project[] = await prisma.project.findMany({
    where: {
      isPublished: {
          not: true
        }
    }
})
}

main()
  .catch(async (e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })