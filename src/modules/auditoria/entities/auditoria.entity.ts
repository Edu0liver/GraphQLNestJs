import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class Auditoria {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
