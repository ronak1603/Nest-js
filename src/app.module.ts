import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';
import { User } from './users/user.entity';
import { AuthModule } from './auth/auth.module';
import { GraphQLModule } from "@nestjs/graphql"
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { join } from 'path';
import { AppResolver } from './app.resolver';
import { BookEntity } from './book/book.entity';
import { BookModule } from './book/book.module';



@Module({
  imports: [
    UsersModule,
    AuthModule,
    BookModule,
    TypeOrmModule.forRoot({
      type: 'mongodb',
      host: 'localhost',
      port: 27017,
      database: 'nest',
      entities: [User, BookEntity],
      synchronize: true,
    }),

    GraphQLModule.forRoot({
      driver:ApolloDriver,
      playground:true,
      autoSchemaFile:join(process.cwd(),'src/schema.graphql'),
      definitions:{
        path:join(process.cwd(),'src/graphql.ts'),
      }
    })

  ],
  controllers: [AppController],
  providers: [AppService, AppResolver],
})
export class AppModule { }
