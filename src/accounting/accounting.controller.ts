import { Body, Controller, Get, Patch, Post } from '@nestjs/common';
import { AccountingService } from './accounting.service';
import { CreateInvoiceDto, ExDto } from './dto/create-invoice.dto';
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

  @Get('customer')
  async getAllCustomer(): Promise<Customer[]> {
    return await this.accountingService.getAllCustomer();
  }
  @Patch('customer')
  async updateCustomer(@Body() exDto: ExDto) {
    return await this.accountingService.updateCustomer(exDto);
  }
}
