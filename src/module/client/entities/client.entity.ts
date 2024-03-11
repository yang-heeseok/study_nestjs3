import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { v4 as uuid } from 'uuid';
import { User } from 'src/module/user/entities/user.entity';

export type ClientDocument = Client & Document;

@Schema({
  toJSON: {
    getters: true,
    virtuals: true,
  },
  timestamps: true,
})
export class Client {
  @Prop({ required: true })
  name: string;

  @Prop({
    required: true,
    unique: true,
    default: function genUUID() {
      return uuid();
    },
  })
  clientId: string;
}

export const ClientSchema = SchemaFactory.createForClass(Client);

ClientSchema.virtual('Users', {
  ref: User.name,
  localField: 'clientId',
  foreignField: 'clientId',
  justOne: false,
});
