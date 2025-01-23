import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PostsModule } from './posts/posts.module';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { join } from 'path';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
      introspection: false,
      playground: {
        settings: {
          'editor.cursorShape': 'line', // other options: 'block', 'underline'
          'editor.fontFamily': 'Consolas, "Courier New", monospace',
          'editor.fontSize': 14,
          'editor.reuseHeaders': true, // new setting
          'editor.theme': 'dark', // other options: 'light'
          'general.betaUpdates': false,
          'queryPlan.hideQueryPlanResponse': false,
          'request.credentials': 'omit',
          'schema.polling.enable': false, // Disable schema polling
          'schema.polling.endpointFilter': '*localhost*',
          'schema.polling.interval': 2000,
          // 'schema.disableComments': true, // Disable tooltips
        },
      },
    }),
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'database.sqlite',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,
    }),
    PostsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
