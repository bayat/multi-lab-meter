import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {Indicator} from '../../models/indicator';
import {BecIndicators} from '../../data/bec-data';
import {ResultPage} from '../result/result';

@Component({
  selector: 'cyto-page',
  templateUrl: 'cyto.html'
})
export class CytoPage {
  indicators: Indicator[] = BecIndicators;
  result = {};
  counter = 0;

  constructor(public navCtrl: NavController) {

  }

  addItem(item: Indicator) {
    if (this.result[item.id]) {
      this.result[item.id]++;
    } else {
      this.result[item.id] = 1;
    }
    this.incrementCounter();
    this.checkFinish();
  }

  incrementCounter() {
    this.counter++;
  }

  checkFinish() {
    if (this.counter == 10) {
      this.navCtrl.push(ResultPage, {result: this.result});
    }
    console.log(this.result, 'results');
  }

}
