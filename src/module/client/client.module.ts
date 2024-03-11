import { Module } from '@nestjs/common';
import { ClientService } from './client.service';
import { ClientController } from './client.controller';
import forFeatureDb from 'src/db/for-feature.db';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  controllers: [ClientController],
  providers: [ClientService],
  imports: [MongooseModule.forFeature(forFeatureDb)],
  exports: [ClientService],
})
export class ClientModule {}
