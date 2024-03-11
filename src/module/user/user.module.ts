import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { MongooseModule } from '@nestjs/mongoose';
import forFeatureDb from 'src/db/for-feature.db';

@Module({
  controllers: [UserController],
  providers: [UserService],
  imports: [MongooseModule.forFeature(forFeatureDb)],
  exports: [UserService],
})
export class UserModule {}
