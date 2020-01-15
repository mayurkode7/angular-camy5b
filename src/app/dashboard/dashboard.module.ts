import { NgModule } from "@angular/core";
import { UsersComponent } from "./users/users.component";
import { RouterModule } from "@angular/router";
import { SharedModule } from "./../../shared/shared.module";
import { CustomerResolverService } from "./../../shared/customer-resolver.service";


@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild([
      {
        path: "myusers",
        component: UsersComponent,
        resolve: { customers: CustomerResolverService }
      },
      { path: "", redirectTo: "myusers", pathMatch: "full" }
    ])
  ],
  declarations: [UsersComponent],
  exports: [UsersComponent]
})
export class DashboardModule {}
