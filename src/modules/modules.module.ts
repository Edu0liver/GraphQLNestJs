import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path';
import { AuditoriaModule } from './auditoria/auditoria.module';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), 'src/shared/graphql/schema.gql'),
      sortSchema: true,
      include: [AuditoriaModule],
    }),
  ],
})
export class ModulesModule {}
