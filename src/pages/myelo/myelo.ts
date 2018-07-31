import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {MyeloData} from '../../data';
import {MyeloResultPage} from '../myelo-result/myelo-result';
import {Indicator} from '../../models/indicator.model';

@Component({
  selector: 'myelo-page',
  templateUrl: 'myelo.html'
})
export class MyeloPage {
  indicators: Indicator[] = MyeloData;
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
    if (this.counter == 100) {
      this.navCtrl.push(MyeloResultPage, {data: this.results, saved: false});
    }
  }

}
