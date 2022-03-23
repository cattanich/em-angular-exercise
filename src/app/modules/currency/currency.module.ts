import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Routes } from "@angular/router";
// import {ErrorsRoutingModule} from './errors-routing.module';
import { RouterModule } from "@angular/router";
import { CurrencyFormat } from "./currency-format/currency-format.component";
import { PricePreview } from "./price-preview/price-preview.component";
import { CurrencyComponent } from "./currency.component";
import { CurrencyApiService } from "src/app/services/currency.service";
import { FormComponent } from "./currency-format/form/form.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { FormEditComponent } from "./currency-format/form-edit/form-edit.component";

const routes: Routes = [
  {
    path: "",
    component: CurrencyComponent,
    children: [
      // {
      //   path: 'your-path',
      //   component: YourComponent,
      // },
      // { path: '', redirectTo: 'accordion', pathMatch: 'full' },
      // { path: '**', redirectTo: 'accordion', pathMatch: 'full' },
    ],
  },
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
  ],
  exports: [RouterModule, CurrencyComponent],
  declarations: [
    CurrencyComponent,
    CurrencyFormat,
    PricePreview,
    FormComponent,
    FormEditComponent,
  ],
  providers: [CurrencyApiService],
})
export class CurrencyModule {}
