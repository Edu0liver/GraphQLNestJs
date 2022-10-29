import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateAuditoriaInput {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
