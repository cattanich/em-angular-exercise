import { Component, OnInit } from "@angular/core";
import {
  FormGroup,
  FormControl,
  Validators,
  ReactiveFormsModule,
} from "@angular/forms";
import { CurrencyApiService } from "src/app/services/currency.service";
import { Currency } from "../../currency-format/currency-format.typings";
import axios from "axios";

@Component({
  selector: "app-form",
  templateUrl: "./form.component.html",
  styleUrls: ["./form.component.scss"],
})
export class FormComponent implements OnInit {
  paises: any[];
  profileForm = new FormGroup({
    countryCode: new FormControl("", [Validators.required]),
    currencyCode: new FormControl("", []),
    currencyPosition: new FormControl("", [Validators.required]),
    thousandIdentifier: new FormControl("", [Validators.required]),
    decimalSeparator: new FormControl("", [Validators.required]),
    cents: new FormControl("", [Validators.required]),
    useCode: new FormControl("", []),
  });

  constructor(private currencyService: CurrencyApiService) {}

  ngOnInit(): void {
    this.getCountries();
  }

  getCountries() {
    this.paises = this.currencyService.getPaises();
  }

  onSubmit() {
    // console.log(this.profileForm.value);
    this.createCurrency();
  }

  createCurrency() {
    var data = {
      newcurr: {
        countryCode: this.profileForm.value.countryCode,
        languageIsoCode: this.profileForm.value.countryCode,
        currencyCode: this.profileForm.value.currencyCode,
        format: {
          useCode: this.profileForm.value.useCode,
          cents: Number(this.profileForm.value.cents),
          currencyPosition: this.profileForm.value.currencyPosition,
          thousandIdentifier: this.profileForm.value.thousandIdentifier,
          decimalSeparator: this.profileForm.value.decimalSeparator,
        },
      },
    };

    var config = {
      url: this.currencyService.apiUrl + "currency-format",
      headers: {
        "Content-Type": "application/json",
        "X-API-KEY": this.currencyService.KEY,
        Accept: "application/json",
      },
    };

    axios
      .post(config.url, data.newcurr, { headers: config.headers })
      .then((response) => {
        console.log(response);
        window.confirm("Document created!");
        window.location.reload();
      })
      .catch((error) => {
        console.error(error);
        window.confirm("error unknown");
        window.location.reload();
      });
  }
}
