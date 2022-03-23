export interface CurrencyFormat {
  useCode: boolean;
  cents: number;
  currencyPosition: "BEFORE" | "AFTER";
  thousandIdentifier: "," | ".";
  decimalSeparator: "," | ".";
}

export interface Currency {
  _id: string;
  languageIsoCode: string;
  countryCode: string;
  currencyCode: string;
  format: CurrencyFormat;
  createdAt: string;
}

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
