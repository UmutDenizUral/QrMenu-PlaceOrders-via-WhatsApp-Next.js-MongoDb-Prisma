import { PrismaClient } from '@prisma/client';

//const prisma = new PrismaClient()  her sayfada yapmak yerine ihtiyaç halinde  import prisma yaparak prismaya ulaşmak için yapıldı. 

declare global {
  var prisma: PrismaClient | undefined
}

const client = globalThis.prisma || new PrismaClient()
if (process.env.NODE_ENV !== 'production')
  globalThis.prisma = client

export default client
