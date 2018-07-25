import {Component, OnInit} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import {Research} from '../../models/research.model';
import {DbService} from '../../services/db.service';

@Component({
  selector: 'save-page',
  templateUrl: 'save.html'
})

export class SavePage implements OnInit {
  data: any;
  research: Research = new Research();

  constructor(public navCtrl: NavController,
              private navParams: NavParams,
              private dbService: DbService) {

  }

  ngOnInit() {
    this.data = this.navParams.get('data');
    this.research.researchType = this.navParams.get('type');
  }

  save() {
    this.dbService.addResearch(this.research, this.data);
    this.navCtrl.popToRoot();
  }

}
