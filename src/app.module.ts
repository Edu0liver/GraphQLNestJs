import { Module } from '@nestjs/common';
import { SharedModule } from './shared/shared.module';
import { ModulesModule } from './modules/modules.module';
import { GraphQLModule } from '@nestjs/graphql';
import { AuditoriaModule } from './modules/auditoria/auditoria.module';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { join } from 'path';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), 'src/shared/graphql/schema.gql'),
      sortSchema: true,
      include: [AuditoriaModule],
    }),
    SharedModule,
    ModulesModule,
  ],
})
export class AppModule {}
