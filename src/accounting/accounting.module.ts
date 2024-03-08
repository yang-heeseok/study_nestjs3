import { Module } from '@nestjs/common';
import { AccountingController } from './accounting.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Invoice, InvoiceSchema } from './schema/invoice.schema';
import { AccountingService } from './accounting.service';
import { Customer, CustomerSchema } from './schema/customer.schema';
import { InvoiceItem, InvoiceItemSchema } from './schema/invoiceItem.schema';
import { InvoiceRepository } from './repository/invoice.repository';
import { InvoiceItemRepository } from './repository/invoiceItem.repository';
import { CustomerRepository } from './repository/customer.repository';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Invoice.name, schema: InvoiceSchema },
      // here
      { name: Customer.name, schema: CustomerSchema },
      { name: InvoiceItem.name, schema: InvoiceItemSchema },
    ]),
  ],
  controllers: [AccountingController],
  providers: [
    AccountingService,
    InvoiceRepository,
    InvoiceItemRepository,
    CustomerRepository,
  ],
})
export class AccountingModule {}
