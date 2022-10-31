import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/shared/prisma/services/prisma.service';

@Injectable()
export class AuditoriaRepository {
  constructor(private prismaService: PrismaService) {}

  async findAllGuias() {
    return await this.prismaService.guia.findMany();
  }

  async findAllGuiasByAuditor(user_id: number) {
    return await this.prismaService.guia.findMany({
      where: {
        user_id,
      },
    });
  }
}
