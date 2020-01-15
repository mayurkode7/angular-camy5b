import { NgModule } from "@angular/core";
import { CustomersComponent } from "./customers/customers.component";
import { RouterModule } from "@angular/router";
import { SharedModule } from './../../shared/shared.module';

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild([
      {
        path: "customers",
        component: CustomersComponent
      },
      {
        path: "",
        pathMatch: "full",
        redirectTo: "customers"
      }
    ])
  ],
  declarations: [CustomersComponent],
  exports: [CustomersComponent]
})
export class ServicingModule {}
