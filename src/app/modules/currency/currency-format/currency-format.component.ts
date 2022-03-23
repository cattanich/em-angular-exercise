import { Component, Input, OnInit } from "@angular/core";

import { Currency } from "./currency-format.typings";

@Component({
  selector: "currency-format",
  templateUrl: "./currency-format.component.html",
  styleUrls: ["./currency-format.component.scss"],
})
export class CurrencyFormat implements OnInit {
  // {
  //     "_id": "61227d5453e7b5000940263e",
  //     "countryCode": "US",
  //     "languageIsoCode": "es",
  //     "currencyCode": "MXN",
  //     "format": {
  //         "useCode": true,
  //         "cents": 2,
  //         "currencyPosition": "BEFORE",
  //         "thousandIdentifier": ",",
  //         "decimalSeparator": "."
  //     },
  //     "createdAt": "2021-08-22T16:37:40.948Z"
  // }
  @Input() currency: Currency;

  constructor() {}

  ngOnInit(): void {}
}
