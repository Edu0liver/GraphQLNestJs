import { registerEnumType } from '@nestjs/graphql';

export enum GuiaStatus {
  Liberada,
  SobAuditoria,
  Cancelada,
  Negada,
}

registerEnumType(GuiaStatus, {
  name: 'GuiaStatus',
});
