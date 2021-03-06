import {Component, OnInit} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import {SavePage} from '../save/save';
import {CytoData} from '../../data';
import {ResearchType} from '../../enums/research-type.enum';
import {Indicator} from '../../models/indicator.model';

@Component({
  selector: 'cyto-result-page',
  templateUrl: './cyto-result.html'
})
export class CytoResultPage implements OnInit {
  data: any;
  cytoData: Indicator[] = CytoData;
  showResult = false;
  saved: boolean;

  constructor(public navCtrl: NavController,
              private navParams: NavParams) {
  }

  ngOnInit() {
    this.data = this.navParams.get('data');
    this.saved = this.navParams.get('saved');
    this.setValues();
  }

  setValues() {
    this.cytoData.forEach((value, index, array) => {
      array[index].value = this.data[value.id] || 0;
    });
    this.showResult = true;
  }

  getColorByItem(item: Indicator): string {
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

  openSavePage() {
    this.navCtrl.push(SavePage, {data: this.cytoData, type: ResearchType.CYTO})
  }
}
