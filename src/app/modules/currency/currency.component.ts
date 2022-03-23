import { Component, OnInit, ChangeDetectorRef } from "@angular/core";
import { CurrencyApiService } from "src/app/services/currency.service";
import { Currency } from "./currency-format/currency-format.typings";
import axios from "axios";

interface Response {
  total: number;
  result: Currency[];
}

@Component({
  selector: "app-currency",
  templateUrl: "./currency.component.html",
  styleUrls: ["./currency.component.scss"],
})
export class CurrencyComponent implements OnInit {
  currencies: Currency[] = [];
  isLoading: boolean = true;
  paises: any[];
  currencyID: any;

  constructor(
    private currencyService: CurrencyApiService,
    private ref: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.getCountries;
    this.currencyService
      .getCurrencies()
      .then((response: Response) => {
        this.currencies = response.result;

        this.isLoading = false;
        this.ref.detectChanges();
      })
      .catch((err) => {});
  }

  getCountries() {
    return (this.paises = this.currencyService.getPaises());
  }

  editCurrency(currency) {
    console.log(currency._id);
    this.currencyID = currency._id;
  }

  deleteCurrency(curr) {
    var config = {
      url: this.currencyService.apiUrl + "currency-format/" + curr._id,
      headers: {
        "Content-Type": "application/json",
        "X-API-KEY": this.currencyService.KEY,
        Accept: "application/json",
      },
    };

    axios
      .delete(config.url, { headers: config.headers })
      .then((response) => {
        console.log(response);
        window.confirm("Document deleted!");
        window.location.reload();
      })
      .catch((error) => {
        console.error(error);
        window.confirm(
          "error unknown db error on id 61227d5453e7b5000940263e, can't delete"
        );
        window.location.reload();
      });
  }
}
