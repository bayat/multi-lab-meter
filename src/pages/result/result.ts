import {Component} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';

@Component({
  selector: 'result-page',
  templateUrl: 'result.html'
})
export class ResultPage {
  result: any;

  constructor(public navCtrl: NavController,
              private navParams: NavParams) {
    this.result = navParams.get('result');
    console.log(this.result, 'result');
  }

}
