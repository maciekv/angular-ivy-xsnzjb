import { Component, VERSION } from '@angular/core';
import { getNumberOfCurrencyDigits } from '@angular/common';
import * as cc from 'currency-codes';

type DiffCurencyResult = cc.CurrencyCodeRecord & {
  getNumberOfCurrencyDigitsByAngular: number;
};

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = getNumberOfCurrencyDigits('BHD');
  all = cc.data;

  result: DiffCurencyResult[] = [];
  constructor() {
    cc.data.forEach((c: cc.CurrencyCodeRecord) => {
      const digits = getNumberOfCurrencyDigits(c.code);
      if (+c.digits !== +digits) {
        this.result.push({
          ...c,
          getNumberOfCurrencyDigitsByAngular: digits,
        });
      }
    });
  }
}
