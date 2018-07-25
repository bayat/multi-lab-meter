import {Component, OnInit} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import {SavePage} from '../save/save';
import {MyeloData} from '../../data';
import {ResearchType} from '../../enums/research-type.enum';
import {Indicator} from '../../models/indicator.model';
import {UtilsService} from '../../services/utils.service';

@Component({
  selector: 'myelo-result-page',
  templateUrl: './myelo-result.html'
})
export class MyeloResultPage implements OnInit {
  data: any;
  myeloData: Indicator[] = MyeloData;
  showResult = false;
  saved: boolean;
  result: number;
  minVal = 2.23;
  maxVal = 2.89;

  constructor(public navCtrl: NavController,
              private navParams: NavParams,
              private utilsService: UtilsService) {
  }

  ngOnInit() {
    this.data = this.navParams.get('data');
    this.saved = this.navParams.get('saved');
    this.setValues();
  }

  setValues() {
    this.myeloData.forEach((value, index, array) => {
      array[index].value = this.data[value.id] || 0;
    });
    this.result = this.utilsService.getMyeloResult(this.myeloData);
    this.showResult = true;
  }

  public getResultText(): string {
    if (this.result < this.minVal) {
      return `Результат: ${this.result}. Ниже нормы`;
    } else if (this.result > this.maxVal) {
      return `Результат: ${this.result}. Выше нормы`;
    } else {
      return `Результат: ${this.result}`;
    }
  }

  openSavePage() {
    this.navCtrl.push(SavePage, {data: this.myeloData, type: ResearchType.MYELO})
  }
}
