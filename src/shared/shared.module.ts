import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HeadOneDirective } from "./head-one.directive";
import { FilterArrayPipe } from "./filter-array.pipe";
import { CustomerService } from "./customer.service";
import { FilterObjPipe } from "./filter-obj.pipe";
import { HttpClientModule } from "@angular/common/http";
import { BlockCutCopyPasteDirective } from "./block-cut-copy-paste.directive";
import { BlockSpecialCharactersDirective } from "./block-special-characters.directive";
import { CustomerResolverService } from './customer-resolver.service';


@NgModule({
  imports: [CommonModule],
  declarations: [
    HeadOneDirective,
    FilterArrayPipe,
    FilterObjPipe,
    BlockCutCopyPasteDirective,
    BlockSpecialCharactersDirective
  ],
  exports: [
    CommonModule,
    FormsModule, ReactiveFormsModule,
    HttpClientModule,
    HeadOneDirective,
    FilterArrayPipe,
    FilterObjPipe,
    BlockCutCopyPasteDirective,
    BlockSpecialCharactersDirective

  ],
  providers: [CustomerService, CustomerResolverService]
})
export class SharedModule {}
