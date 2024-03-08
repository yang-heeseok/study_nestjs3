import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Invoice } from './schema/invoice.schema';
import { Model } from 'mongoose';
import {
  CreateCustomerDto,
  CreateInvoiceDto,
  CreateInvoiceItemDto,
} from './dto/create-invoice.dto';
import { Customer } from './schema/customer.schema';
import { InvoiceItem } from './schema/invoiceItem.schema';
import { InvoiceRepository } from './repository/invoice.repository';
import { InvoiceItemRepository } from './repository/invoiceItem.repository';
import { CustomerRepository } from './repository/customer.repository';

@Injectable()
export class AccountingService {
  constructor(
    private invoiceRepository: InvoiceRepository,
    private customerRepository: CustomerRepository,
    private invoiceItemRepository: InvoiceItemRepository,
  ) {}

  async getAllInvoices(): Promise<Invoice[]> {
    return await this.invoiceRepository.findAll();
  }

  async createInvoice(createIvoiceDto: CreateInvoiceDto): Promise<Invoice> {
    const { name, phone, invoice_date, obj_items } = createIvoiceDto;
    const invoiceItems = await this.createInvoiceItems(obj_items);
    const customer = await this.createOrFindCustomer({ name, phone });

    return await this.invoiceRepository.create({
      invoice_date,
      obj_items: invoiceItems,
      obj_customer: customer,
    });
  }

  //create customer
  async createOrFindCustomer(
    customerData: CreateCustomerDto,
  ): Promise<Customer> {
    const customer = await this.customerRepository.findOne({
      phone: customerData.phone,
    });
    if (customer) return customer;
    return await this.customerRepository.create(customerData);
  }

  //create invoice item
  private async createInvoiceItems(
    invoiceItemData: CreateInvoiceItemDto[],
  ): Promise<InvoiceItem[]> {
    return await this.invoiceItemRepository.create(invoiceItemData);
  }
}
