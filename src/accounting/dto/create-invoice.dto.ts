export class CreateInvoiceDto {
  invoice_date: Date;
  name: string;
  phone: string;
  obj_items: [
    {
      good_name: string;
      good_price: number;
      good_amount: number;
    },
  ];
}

export class CreateCustomerDto {
  name: string;
  phone: string;
}

export class CreateInvoiceItemDto {
  good_name: string;
  good_price: number;
  good_amount: number;
}

export class CreateInvoiceShortDto {
  invoice_date: Date;
  obj_customer: CreateCustomerDto;
  obj_items: CreateInvoiceItemDto[];
}
