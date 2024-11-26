import { INestApplication, Injectable, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit {
    async onModuleInit() {
        this.$connect();
    }

    async onModuleDestroy() {
        await this.$disconnect();
    }

    async onApplicationShutdown() {
        await this.$disconnect();
    }
}
