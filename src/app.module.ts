import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BoardsModule } from './boards/boards.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeORMconfig } from './configs/typeorm.config';

@Module({
  imports: [TypeOrmModule.forRoot(typeORMconfig), BoardsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
