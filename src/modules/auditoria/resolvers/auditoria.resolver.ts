import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { AuditoriaService } from '../services/auditoria.service';
import { Auditoria } from '../entities/auditoria.entity';
import { CreateAuditoriaInput } from '../dto/create-auditoria.input';
import { UpdateAuditoriaInput } from '../dto/update-auditoria.input';

@Resolver(() => Auditoria)
export class AuditoriaResolver {
  constructor(private readonly auditoriaService: AuditoriaService) {}

  @Mutation(() => Auditoria)
  createAuditoria(
    @Args('createAuditoriaInput') createAuditoriaInput: CreateAuditoriaInput,
  ) {
    return this.auditoriaService.create(createAuditoriaInput);
  }

  @Query(() => [Auditoria], { name: 'auditoria' })
  findAll() {
    return this.auditoriaService.findAll();
  }

  @Query(() => Auditoria, { name: 'auditoria' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.auditoriaService.findOne(id);
  }

  @Mutation(() => Auditoria)
  updateAuditoria(
    @Args('updateAuditoriaInput') updateAuditoriaInput: UpdateAuditoriaInput,
  ) {
    return this.auditoriaService.update(
      updateAuditoriaInput.id,
      updateAuditoriaInput,
    );
  }

  @Mutation(() => Auditoria)
  removeAuditoria(@Args('id', { type: () => Int }) id: number) {
    return this.auditoriaService.remove(id);
  }
}
