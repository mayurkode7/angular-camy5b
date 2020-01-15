import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule } from "@angular/router";
import { SharedModule } from "../shared/shared.module";

import { AppComponent } from "./app.component";
import { HelloComponent } from "./hello.component";

@NgModule({
  imports: [
    BrowserModule,
    SharedModule,
    RouterModule.forRoot([
      { path: "", redirectTo: "users", pathMatch: "full" },
      { path: "users", component: HelloComponent },
      {
        path: "servicing",
        loadChildren: () =>
          import("./servicing/servicing.module").then(m => m.ServicingModule)
      },
      {
        path: "dashboard",
        loadChildren: () =>
          import("./dashboard/dashboard.module").then(m => m.DashboardModule)
      }
    ])
  ],
  declarations: [AppComponent, HelloComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
