import {Component, OnInit} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import {TypeResearch} from '../../enums/type-research';
import {Person} from '../../models/person.model';
import {DbService} from '../../services/db.service';
import {SQLite} from '@ionic-native/sqlite';
import {SQLiteObject} from '../../services/sqlite-object';

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
              private navParams: NavParams,
              private sqlite: SQLite,
              private dbService: DbService) {
  }

  ngOnInit() {
    this.data = this.navParams.get('data');
    this.typeResearch = this.navParams.get('type');
  }

  save() {
    this.sqlite.create({
      name: 'data.db',
      location: 'default'
    })
      .then((db: SQLiteObject) => {
        db.executeSql(`insert into researches(lastName,firstName,middleName,dt) values (?,?,?,?)`,
          [this.person.lastName, this.person.firstName, this.person.middleName, this.person.dt]
        )
          .then(data => {
            this.navCtrl.popToRoot();
            return console.log(data, 'data');
          })
          .catch(e => console.log(e));
      });
  }
}
