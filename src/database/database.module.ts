import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://airtown:UNa3JK55Z5uoUvnS@cluster0.jqtcty4.mongodb.net/?retryWrites=true&w=majority',
    ),
  ],
})
export class DatabaseModule {}
