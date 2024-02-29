export class CreateInvoiceItemDto {
  good_name: string;
  good_price: number;
  good_amount: number;
}

export class CreateCustomerDto {
  customer_name: string;
  customer_phone: string;
}

export class CreateInvoiceDto {
  invoice_date: Date;
  customer_name: string;
  customer_phone: string;
  obj_items: [
    {
      good_name: string;
      good_price: number;
      good_amount: number;
    },
  ];
}

export class CreateInvoiceShortDto {
  invoice_date: Date;
  obj_customer: string;
  obj_items: [string];
}

export class ExDto {
  searchString: string;
  replaceString: string;
}
