import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  data: any;
  constructor(private er: ActivatedRoute) { }

  ngOnInit() {

    this.data = this.er.snapshot.data.customers;
  }

}