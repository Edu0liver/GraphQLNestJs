import { registerEnumType } from '@nestjs/graphql';

export enum GuiaTipos {
  Ambulatorial,
  Cirurgica,
}

registerEnumType(GuiaTipos, {
  name: 'GuiaTipos',
});
