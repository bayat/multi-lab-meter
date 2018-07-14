import {Component, OnInit} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import {BecIndicator} from '../../models/bec-indicator.model';
import {BecIndicators} from '../../data/bec-data';

@Component({
  selector: 'cyto-result-page',
  templateUrl: './cyto-result.html'
})
export class CytoResultPage implements OnInit {
  data: any;
  becIndicators: BecIndicator[] = BecIndicators;
  showResult = false;

  constructor(public navCtrl: NavController,
              private navParams: NavParams) {
  }

  ngOnInit() {
    this.data = this.navParams.get('data');
    this.setValues();
  }

  setValues() {
    this.becIndicators.forEach((value, index, array) => {
      array[index].value = this.data[value.id] || 0;
    });
    this.showResult = true;
  }

  getColorByItem(item: BecIndicator): string {
    if (item.min !== undefined && item.max) {
      if (item.value >= item.min && item.value <= item.max) {
        return 'secondary';
      } else {
        return 'danger'
      }
    } else {
      return 'primary';
    }
  }
}
