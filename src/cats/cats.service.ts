import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Cat, CatDocument } from './schemas/cat.schema';

@Injectable()
export class CatsService {
  constructor(@InjectModel(Cat.name) private catModel: Model<CatDocument>) {}

  async create(cat: Cat): Promise<Cat> {
    const createdCat = new this.catModel(cat);
    return createdCat.save();
  }

  async findAll(): Promise<Cat[]> {
    return this.catModel.find().exec();
  }

  async findById(id: string): Promise<Cat | null> {
    try {
      const cat = await this.catModel.findById(id).exec();
      if (!cat) {
        throw new NotFoundException('Cat not found');
      }
      return cat;
    } catch (error) {
      throw new NotFoundException('Cat not found');
    }
  }
}
