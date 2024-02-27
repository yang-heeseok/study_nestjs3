import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ormConfig } from './orm.config';
import { ConfigModule } from '@nestjs/config';
import { CatsModule } from './cats/cats.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    // TypeOrmModule.forRootAsync({ useFactory: ormConfig }),
    MongooseModule.forRoot(
      'mongodb+srv://airtown:UNa3JK55Z5uoUvnS@cluster0.jqtcty4.mongodb.net/?retryWrites=true&w=majority',
    ),
    CatsModule,
    UserModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
