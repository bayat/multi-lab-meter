import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {Indicator} from '../../models/indicator.model';
import {LeycoResultPage} from '../leyco-result/leyco-result';
import {LeycoData} from '../../data';

@Component({
  selector: 'leyco-page',
  templateUrl: 'leyco.html'
})
export class LeycoPage {
  indicators: Indicator[] = LeycoData;
  counter = 0;
  results = {};

  constructor(public navCtrl: NavController) {

  }

  addItem(item: Indicator) {
    if (this.results[item.id]) {
      this.results[item.id]++;
    } else {
      this.results[item.id] = 1;
    }

    this.incrementCounter();
    this.checkFinish();
  }

  incrementCounter() {
    this.counter++;
  }

  checkFinish() {
    if (this.counter == 10) {
      this.navCtrl.push(LeycoResultPage, {data: this.results, saved: false});
    }
  }

}
