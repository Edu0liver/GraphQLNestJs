import { CreateAuditoriaInput } from './create-auditoria.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateAuditoriaInput extends PartialType(CreateAuditoriaInput) {
  @Field(() => Int)
  id: number;
}
