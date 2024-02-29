import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { FilterQuery, Model, UpdateQuery } from 'mongoose';
import { Customer, CustomerDocument } from '../schema/customer.schema';
import { CreateCustomerDto } from '../dto/create-invoice.dto';

@Injectable()
export class CustomerRepository {
  constructor(
    @InjectModel(Customer.name) private customerModel: Model<CustomerDocument>,
  ) {}

  async finds(filter: FilterQuery<CustomerDocument>) {
    const data = await this.customerModel.find(filter).exec();
    return data;
  }

  async findOne(filter: FilterQuery<CustomerDocument>) {
    const data = await this.customerModel.find(filter).exec();
    return data;
  }

  async create(createCustomerDto: CreateCustomerDto): Promise<Customer> {
    const customer = await this.customerModel
      .findOne({ phone: createCustomerDto.customer_phone })
      .exec();
    if (customer) {
      return customer;
    }
    return await this.customerModel.create(createCustomerDto);
  }

  async bulkUpdate(
    filter: FilterQuery<CustomerDocument>,
    update: UpdateQuery<CustomerDocument>,
  ) {
    return await this.customerModel.updateMany(filter, update);
  }
}
