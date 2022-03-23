import {
  Component,
  Input,
  OnInit,
  SimpleChanges,
  OnChanges,
} from "@angular/core";

import {
  Currency,
  CurrencyFormat,
} from "../currency-format/currency-format.typings";
@Component({
  selector: "price-preview",
  templateUrl: "./price-preview.component.html",
  styleUrls: [],
})
export class PricePreview implements OnInit, OnChanges {
  // {
  //     "format": {
  //         "useCode": true,
  //         "cents": 2,
  //         "currencyPosition": "BEFORE",
  //         "thousandIdentifier": ",",
  //         "decimalSeparator": "."
  //     }
  // }

  priceFormat: string = "$1.234";

  unDigito = "1";
  centenares = "1234";
  decimales = "51234";
  eurSymbol = "€";
  dollarSymbol = "$";

  @Input() format: Currency;
  @Input() size: string;

  constructor() {}

  ngOnInit(): void {
    this.creaFormato();
  }

  creaFormato() {
    if (this.format.format) {
      if (this.format.format.useCode) {
        this.getFormatoConCodigo();
      } else {
        this.getFormatoConSymb();
      }
    }
  }

  getFormatoConCodigo() {
    if (this.format.format.currencyPosition == "AFTER") {
      this.priceFormat =
        this.validaCentenares() +
        this.getCents() +
        " " +
        this.format.currencyCode;
    } else {
      this.priceFormat =
        this.format.currencyCode +
        " " +
        this.validaCentenares() +
        this.getCents();
    }
  }

  validaCentenares() {
    if (this.format.format.thousandIdentifier) {
      return (
        this.unDigito + this.format.format.thousandIdentifier + this.centenares
      );
    }
    return this.unDigito + "," + this.centenares;
  }

  getFormatoConSymb() {
    if (this.format.format.currencyPosition == "AFTER") {
      this.priceFormat =
        this.validaCentenares() + this.getCents() + " " + this.getSymb();
    } else {
      this.priceFormat =
        this.getSymb() + " " + this.validaCentenares() + this.getCents();
    }
  }

  getSymb() {
    if (this.format.currencyCode == "EUR") {
      return this.eurSymbol;
    } else {
      return this.dollarSymbol;
    }
  }

  getCents() {
    let decimals = "";
    if (this.format.format.cents > 0) {
      decimals = this.validaSeparador();
    }
    return decimals + this.decimales.substring(0, this.format.format.cents);
  }

  validaSeparador() {
    if (this.format.format.decimalSeparator) {
      return this.format.format.decimalSeparator;
    } else {
      return ".";
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.creaFormato();
  }
}
