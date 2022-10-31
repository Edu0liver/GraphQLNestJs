import { Module } from '@nestjs/common';
import { AuditoriaService } from './services/auditoria.service';
import { AuditoriaResolver } from './resolvers/auditoria.resolver';
import { AuditoriaRepository } from './repositories/auditoria.repository';
import { PrismaModule } from 'src/shared/prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  providers: [AuditoriaResolver, AuditoriaService, AuditoriaRepository],
  exports: [AuditoriaResolver],
})
export class AuditoriaModule {}
