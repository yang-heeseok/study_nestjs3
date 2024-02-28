import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Invoice, InvoiceDocument } from '../schema/invoice.schema';
import { FilterQuery, Model } from 'mongoose';

@Injectable()
export class InvoiceRepository {
  constructor(
    @InjectModel(Invoice.name) private invoiceModel: Model<InvoiceDocument>,
  ) {}

  async finds(filter: FilterQuery<InvoiceDocument>) {
    const data = await this.invoiceModel.find(filter).exec();
    return data;
  }
}
