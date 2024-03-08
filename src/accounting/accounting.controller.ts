import { Body, Controller, Get, Post } from '@nestjs/common';
import { AccountingService } from './accounting.service';
import { CreateCustomerDto, CreateInvoiceDto } from './dto/create-invoice.dto';
import { Invoice } from './schema/invoice.schema';
import { Customer } from './schema/customer.schema';

@Controller('accounting')
export class AccountingController {
  constructor(private readonly accountingService: AccountingService) {}

  @Post('invoice')
  async createInvoice(
    @Body() createInvoiceDto: CreateInvoiceDto,
  ): Promise<Invoice> {
    return await this.accountingService.createInvoice(createInvoiceDto);
  }

  @Get('invoice/all')
  async getAllInvoices(): Promise<Invoice[]> {
    return await this.accountingService.getAllInvoices();
  }

  @Post('customer')
  async createCustomer(
    @Body() createCustomerDto: CreateCustomerDto,
  ): Promise<Customer> {
    return await this.accountingService.createOrFindCustomer(createCustomerDto);
  }
}
