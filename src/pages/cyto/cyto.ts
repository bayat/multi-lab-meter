import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {CytoResultPage} from '../cyto-result/cyto-result';
import {BecIndicator} from '../../models/bec-indicator.model';
import {BecIndicators} from '../../data/bec.data';

@Component({
  selector: 'cyto-page',
  templateUrl: 'cyto.html'
})
export class CytoPage {
  indicators: BecIndicator[] = BecIndicators;
  counter = 0;
  results = {};

  constructor(public navCtrl: NavController) {

  }

  addItem(item: BecIndicator) {
    if (this.results[item.id]) {
      this.results[item.id]++;
    } else {
      this.results[item.id] = 1;
    }

    if (!item.counterIgnore) {
      this.incrementCounter();
      this.checkFinish();
    }
  }

  incrementCounter() {
    this.counter++;
  }

  checkFinish() {
    if (this.counter == 10) {
      this.navCtrl.push(CytoResultPage, {data: this.results, saved: false});
    }
  }

}
