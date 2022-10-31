import { Resolver, Query, Args } from '@nestjs/graphql';
import { AuditoriaService } from '../services/auditoria.service';
import { Guia } from '../../graphql/models/guia.entity';

@Resolver(() => Guia)
export class AuditoriaResolver {
  constructor(private readonly auditoriaService: AuditoriaService) {}

  @Query(() => [Guia])
  findAllGuias() {
    return this.auditoriaService.findAllGuias();
  }

  @Query(() => [Guia])
  findAllGuiasByAuditor(@Args('auditor_id') auditor_id: number) {
    return this.auditoriaService.findAllGuiasByAuditor(auditor_id);
  }
}
