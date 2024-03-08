import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { InvoiceItem } from '../schema/invoiceItem.schema';
import { CreateInvoiceItemDto } from '../dto/create-invoice.dto';

@Injectable()
export class InvoiceItemRepository {
  constructor(
    @InjectModel(InvoiceItem.name)
    private readonly invoiceItemModel: Model<InvoiceItem>,
  ) {}

  async create(invoice: CreateInvoiceItemDto[]) {
    const created = await this.invoiceItemModel.create(invoice);
    return created;
  }
}
