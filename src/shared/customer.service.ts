import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';

@Injectable({

  providedIn: 'root'
  
})
export class CustomerService {
  customers = [
    { name: "Rox", age: "25", address: { a1: "Mumbai", a2: "Karnataka" } },
    { name: "Dev", age: "30", address: { a1: "Pune", a2: "Maharashtra" } }
  ];

  constructor(private http: HttpClient) {}

  getCustomers() {
    return this.customers;
  }

  getUsers() {

    return this.http.get('https://reqres.in/api/users');

  }
}
