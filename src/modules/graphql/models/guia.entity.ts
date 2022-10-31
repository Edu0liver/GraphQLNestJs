import { ObjectType, Field, Int } from '@nestjs/graphql';
import { GuiaStatus } from '../enums/guia-status.enum';
import { GuiaTipos } from '../enums/guia-tipos.enum';

@ObjectType()
export class Guia {
  @Field(() => Int)
  id: number;

  @Field(() => GuiaStatus)
  status: GuiaStatus;

  @Field(() => GuiaTipos)
  tipo: GuiaTipos;

  @Field(() => Date)
  data_emissao: Date;

  @Field(() => Date)
  data_alteracao: Date;

  @Field(() => Int)
  customer_id: number;

  @Field(() => Int)
  user_id: number;

  @Field(() => Int)
  solicitante_id: number;
}
