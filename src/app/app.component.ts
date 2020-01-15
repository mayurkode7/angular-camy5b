import { Component, OnInit } from "@angular/core";
import { CustomerService } from "../shared/customer.service";
import { APP_CONFIG } from './app.config';
import { KEYS, NAME } from './app.constants';

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  name = "Angular" + NAME;
  formObj = new FormData();
  checkValidation = false;
  date = new Date();
  customers = [];
  names = ["mayur", "vijay", "kode", "Mak"];
  users = [
    { name: "Ronaldo", age: 20 },
    { name: "sergio", age: 30 },
    { name: "Ramos", age: 40 }
  ];

  newUsers;
  months = [
    "Jan",
    "Feb",
    "Mar",
    "April",
    "May",
    "Jun",
    "July",
    "Aug",
    "Sept",
    "Oct",
    "Nov",
    "Dec"
  ];

  constructor(private customerService: CustomerService) {
    this.customers = customerService.getCustomers();
  }

  ngOnInit() {

    this.customerService.getUsers().subscribe( 
      
      (next)=> {console.log(next);},
      
      
    );


    this.customerService.getUsers().toPromise().then( (data)=> {
      console.log(data);
    }).catch( (e) => {
      console.log(e);
    });
  }

  validate(): void {
    console.log("validate");
    this.checkValidation = true;
  }

  onFocus(): void {
    this.checkValidation = false;
  }
}

export class FormData {
  company = "";
  user = "";
}
