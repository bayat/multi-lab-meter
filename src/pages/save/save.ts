import {Component, OnInit} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import {TypeResearch} from '../../enums/type-research';
import {Person} from '../../models/person.model';

@Component({
  selector: 'save-page',
  templateUrl: 'save.html'
})

export class SavePage implements OnInit {
  data: any;
  typeResearch: TypeResearch;
  person: Person = {
    lastName: '',
    firstName: '',
    middleName: '',
    dt: (new Date()).toISOString()
  };

  constructor(public navCtrl: NavController,
              private navParams: NavParams) {

  }

  ngOnInit() {
    this.data = this.navParams.get('data');
    this.typeResearch = this.navParams.get('type');
  }

  save() {
    console.log(this.person, 'person');
  }

}
