import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Invoice, InvoiceDocument } from '../schema/invoice.schema';
import { FilterQuery, Model } from 'mongoose';
import { CreateInvoiceShortDto } from '../dto/create-invoice.dto';

@Injectable()
export class InvoiceRepository {
  constructor(
    @InjectModel(Invoice.name) private readonly invoiceModel: Model<Invoice>,
  ) {}

  async create(invoice: CreateInvoiceShortDto) {
    const created = await this.invoiceModel.create(invoice);
    return created;
  }

  async findOne(filter: FilterQuery<InvoiceDocument>) {
    const data = await this.invoiceModel.findOne(filter).exec();
    return data;
  }

  async findAll() {
    const data = await this.invoiceModel
      .find()
      .populate('obj_customer')
      .populate('obj_items')
      .exec();
    return data;
  }
}
