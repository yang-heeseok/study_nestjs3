import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Invoice, InvoiceDocument } from '../schema/invoice.schema';
import { FilterQuery, Model } from 'mongoose';
// import { CreateInvoiceShortDto } from '../dto/create-invoice.dto';

@Injectable()
export class InvoiceRepository {
  constructor(
    @InjectModel(Invoice.name) private invoiceModel: Model<InvoiceDocument>,
  ) {}

  async finds(filter: FilterQuery<InvoiceDocument>) {
    const data = await this.invoiceModel.find(filter).exec();
    return data;
  }

  async findOne(filter: FilterQuery<InvoiceDocument>) {
    const data = await this.invoiceModel.find(filter).exec();
    return data;
  }

  async findWithPopulate(filter: FilterQuery<InvoiceDocument>) {
    const data = await this.invoiceModel
      .find(filter)
      .populate({ path: 'obj_customer obj_items', select: 'name phone -_id' })
      // .populate({ path: 'obj_items' })
      .populate('obj_items')
      .exec();
    return data;
  }

  // async create(createInvoiceShortDto: CreateInvoiceShortDto): Promise<Invoice> {
  //   return await this.invoiceModel.create(createInvoiceDto);
  // }
}
