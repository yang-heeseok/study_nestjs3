import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Invoice } from './schema/invoice.schema';
import { Model } from 'mongoose';
import {
  CreateCustomerDto,
  CreateInvoiceDto,
  CreateInvoiceItemDto,
} from './dto/create-invoice.dto';
import { InvoiceItem } from './schema/invoice-item.schema';
import { Customer } from './schema/customer.schema';
import { InvoiceRepository } from './repository/invoce.repository';
import { InvoceItemRepository } from './repository/invoce-item.repository';
import { CustomerRepository } from './repository/customer.repository';

@Injectable()
export class AccountingService {
  constructor(
    @InjectModel(Invoice.name) private readonly invoiceModel: Model<Invoice>,
    private invoiceRepository: InvoiceRepository,
    private invoceItemRepository: InvoceItemRepository,
    private customerRepository: CustomerRepository,
  ) {}

  async createInvoice(createIvoiceDto: CreateInvoiceDto): Promise<Invoice> {
    const { invoice_date, customer_name, customer_phone, obj_items } =
      createIvoiceDto;
    const invoiceItems = await this.createInvoiceItems(obj_items);
    const customer = await this.createOrFindCustomer({
      customer_name: customer_name,
      customer_phone: customer_phone,
    });
    return await this.invoiceModel.create({
      invoice_date,
      obj_items: invoiceItems,
      obj_customer: customer,
    });
  }

  async getAllInvoices(): Promise<Invoice[]> {
    const invoces = await this.invoiceRepository.findWithPopulate({});
    return invoces;
  }

  private async createOrFindCustomer(
    customerData: CreateCustomerDto,
  ): Promise<Customer> {
    return await this.customerRepository.create(customerData);
  }

  private async createInvoiceItems(
    invoiceItemData: [CreateInvoiceItemDto],
  ): Promise<InvoiceItem[]> {
    return await this.invoceItemRepository.create(invoiceItemData);
  }
}
