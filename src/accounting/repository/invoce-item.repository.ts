import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { FilterQuery, Model } from 'mongoose';
import {
  InvoiceItem,
  InvoiceItemDocument,
} from '../schema/invoice-item.schema';
import { CreateInvoiceItemDto } from '../dto/create-invoice.dto';
// import { CreateInvoiceItemDto } from '../dto/create-invoice.dto';

@Injectable()
export class InvoceItemRepository {
  constructor(
    @InjectModel(InvoiceItem.name)
    private invoiceItemModel: Model<InvoiceItemDocument>,
  ) {}

  async finds(filter: FilterQuery<InvoiceItemDocument>) {
    const data = await this.invoiceItemModel.find(filter).exec();
    return data;
  }

  async findOne(filter: FilterQuery<InvoiceItemDocument>) {
    const data = await this.invoiceItemModel.find(filter).exec();
    return data;
  }

  async create(
    invoiceItemData: [CreateInvoiceItemDto],
  ): Promise<InvoiceItem[]> {
    return await this.invoiceItemModel.create(invoiceItemData);
  }
}
