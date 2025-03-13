import { PrismaClient } from "@prisma/client";

const globalForPrisma = global as unknown as { prisma: PrismaClient };

export const prisma =
  globalForPrisma.prisma ||
  new PrismaClient({
    log: ["error"],
    datasourceUrl: process.env.DATABASE_URL,
  });

// Asegurarse de que en desarrollo usemos una única instancia
if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;

// Manejar la limpieza de conexiones cuando la aplicación se cierra
process.on("beforeExit", async () => {
  await prisma.$disconnect();
});

export default prisma;
