import { Module } from '@nestjs/common';
import { AuditoriaService } from './services/auditoria.service';
import { AuditoriaResolver } from './resolvers/auditoria.resolver';

@Module({
  providers: [AuditoriaResolver, AuditoriaService],
})
export class AuditoriaModule {}
