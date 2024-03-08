import { Injectable } from '@nestjs/common';
import { Customer, CustomerDocument } from '../schema/customer.schema';
import { InjectModel } from '@nestjs/mongoose';
import { FilterQuery, Model } from 'mongoose';
import { CreateCustomerDto } from '../dto/create-invoice.dto';

@Injectable()
export class CustomerRepository {
  constructor(
    @InjectModel(Customer.name) private readonly customerModel: Model<Customer>,
  ) {}

  async create(customer: CreateCustomerDto) {
    const created = await this.customerModel.create(customer);
    return created;
  }

  async findOne(filter: FilterQuery<CustomerDocument>) {
    const data = await this.customerModel.findOne(filter).exec();
    return data;
  }
}
