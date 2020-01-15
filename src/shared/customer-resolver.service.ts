import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { CustomerService } from './customer.service';


@Injectable()
export class CustomerResolverService implements Resolve <any> {

  constructor(private customerService: CustomerService) { }

  resolve() {
    return this.customerService.getCustomers();
  }
}