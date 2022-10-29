import { Module } from '@nestjs/common';
import { SharedModule } from './shared/shared.module';
import { ModulesModule } from './modules/modules.module';

@Module({
  imports: [SharedModule, ModulesModule],
})
export class AppModule {}
