import {Component, OnInit} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import {ResearchType} from '../../enums/research-type.enum';
import {Research} from '../../models/research.model';
import {DbService} from '../../services/db.service';

@Component({
  selector: 'save-page',
  templateUrl: 'save.html'
})

export class SavePage implements OnInit {
  data: any;
  typeResearch: ResearchType;
  research: Research = new Research();

  constructor(public navCtrl: NavController,
              private navParams: NavParams,
              private dbService: DbService) {

  }

  ngOnInit() {
    this.data = this.navParams.get('data');
    this.typeResearch = this.navParams.get('type');
  }

  save() {
    this.dbService.addResearch(this.typeResearch, this.research, this.data);
    this.navCtrl.popToRoot();
  }

}
