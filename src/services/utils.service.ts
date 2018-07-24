import {Injectable} from '@angular/core';
import {Indicator} from '../models/indicator.model';

@Injectable()
export class UtilsService {

  constructor() {
  }

  getResultByMyeloIndicators(indicators: Indicator[]): number {
    let sum: number = 0;
    indicators.forEach(val => {
      sum += (+val.id - 1) * val.value;
    });
    return sum / 100.0;
  }

}
