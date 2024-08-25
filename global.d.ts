import {PrismaClient} from '@prisma/client';
'
declare global {
    namesapce globalThis{
        var prismadb: PrismaClient
    }
}