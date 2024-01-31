import { PrismaClient } from '@prisma/client'


const prisma = new PrismaClient() 

export async function getProjectId(projectName: string) {
    const project = await prisma.project.findUnique({
      where: {
        title: projectName,
      },
    })
  
    if (!project) {
      throw new Error(`Project with name ${projectName} not found`)
    }
  
    return project.id
  }
  