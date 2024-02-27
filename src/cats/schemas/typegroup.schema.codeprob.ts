import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
// import { IsString, IsNotEmpty } from 'class-validator';
import mongoose, { Document } from 'mongoose';

export type CodeProbDocument = CodeProb & Document;

@Schema()
export class CodeProb extends Document {
  @Prop({
    required: true,
    type: mongoose.Schema.Types.ObjectId,
    // ref: 'TypeCode',
    index: true,
  })
  typeCode: string;

  @Prop({
    required: true,
    type: mongoose.Schema.Types.ObjectId,
    // ref: 'Problem',
    index: true,
  })
  typeGroup: string;
}

export const CodeProbSchema = SchemaFactory.createForClass(CodeProb);
