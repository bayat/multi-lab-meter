import {Injectable} from '@angular/core';
import {SQLite, SQLiteObject} from '@ionic-native/sqlite';
import {Research} from '../models/research.model';
import {Indicator} from '../models/indicator.model';
import {ResearchType} from '../enums/research-type.enum';
import {UtilsService} from './utils.service';
import {AlertController} from 'ionic-angular';

@Injectable()
export class DbService {
  private db: SQLiteObject;

  constructor(private sqlite: SQLite,
              private alertCtrl: AlertController,
              private utilsService: UtilsService) {
    this.initDb();
  }

  getDb(): SQLiteObject {
    return this.db;
  }

  initDb() {
    this.sqlite.create({
      name: 'data.db',
      location: 'default'
    })
      .then((db: SQLiteObject) => {
        this.db = db;
        // создание таблиц
        db.executeSql(`
          CREATE TABLE IF NOT EXISTS researches(
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            lastName NVARCHAR,
            firstName NVARCHAR,
            middleName NVARCHAR,
            dt TEXT,
            researchType INTEGER)
        `)
          .then(() => {
          })
          .catch(() => {
          });

        db.executeSql(`
          CREATE TABLE IF NOT EXISTS cyto(
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            researchId INTEGER NOT NULL,
            ind_1 INTEGER NOT NULL,
            ind_2 INTEGER NOT NULL,
            ind_3 INTEGER NOT NULL,
            ind_4 INTEGER NOT NULL,
            ind_5 INTEGER NOT NULL,
            ind_6 INTEGER NOT NULL,
            ind_7 INTEGER NOT NULL,
            ind_8 INTEGER NOT NULL,
            ind_9 INTEGER NOT NULL,
            ind_10 INTEGER NOT NULL,
            ind_11 INTEGER NOT NULL,
            ind_12 INTEGER NOT NULL,
            ind_13 INTEGER NOT NULL,
            FOREIGN KEY(researchId) REFERENCES researches(id)
          )
        `)
          .then(() => {
          })
          .catch(() => {
          });

        db.executeSql(`
          CREATE TABLE IF NOT EXISTS myelo(
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            researchId INTEGER NOT NULL,
            ind_1 INTEGER NOT NULL,
            ind_2 INTEGER NOT NULL,
            ind_3 INTEGER NOT NULL,
            ind_4 INTEGER NOT NULL,
            ind_5 INTEGER NOT NULL,
            result REAL NOT NULL,
            FOREIGN KEY(researchId) REFERENCES researches(id)
          )
        `)
          .then(() => {
          })
          .catch(() => {
          });

        db.executeSql(`
          CREATE TABLE IF NOT EXISTS leyco(
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            researchId INTEGER NOT NULL,
            ind_1 INTEGER NOT NULL,
            ind_2 INTEGER NOT NULL,
            ind_3 INTEGER NOT NULL,
            ind_4 INTEGER NOT NULL,
            ind_5 INTEGER NOT NULL,
            ind_6 INTEGER NOT NULL,
            ind_7 INTEGER NOT NULL,
            FOREIGN KEY(researchId) REFERENCES researches(id)
          )
        `)
          .then(() => {
          })
          .catch(() => {
          });

      })
      .then(() => {
      })
      .catch(this.showError.bind(this));
  }

  addResearch(researchData: Research, values: Indicator[]) {
    let researchType = researchData.researchType;
    this.db.executeSql(`insert into researches(lastName,firstName,middleName,dt,researchType) values (?,?,?,?,?)`,
      [researchData.lastName, researchData.firstName, researchData.middleName, researchData.dt, researchType])
      .then(data => {
        let researchId = data.insertId;
        if (researchType == ResearchType.CYTO) {
          this.addCytoValues(researchId, values);
        } else if (researchType == ResearchType.MYELO) {
          this.addMyeloValues(researchId, values);
        } else if (researchType == ResearchType.LEYCO) {
          this.addLeycoValues(researchId, values);
        }
      })
      .catch(this.showError.bind(this));
  }

  addCytoValues(researchId: number, values: Indicator[]) {
    let params = [];
    params.push(researchId);
    values.forEach(value => params.push(value.value));
    this.db.executeSql(`
        INSERT INTO cyto(researchId,ind_1,ind_2,ind_3,ind_4,ind_5,ind_6,ind_7,ind_8,ind_9,ind_10,ind_11,ind_12,ind_13)
        VALUES(?,?,?,?,?,?,?,?,?,?,?,?,?,?)`, params)
      .then(data => {
      })
      .catch(this.showError.bind(this))
  }

  addMyeloValues(researchId: number, values: Indicator[]) {
    let result = this.utilsService.getMyeloResult(values);
    let params = [];
    params.push(researchId);
    values.forEach(value => params.push(value.value));
    params.push(result);
    this.db.executeSql(`
        INSERT INTO myelo(researchId,ind_1,ind_2,ind_3,ind_4,ind_5,result)
        VALUES(?,?,?,?,?,?,?)`, params)
      .then(data => {
      })
      .catch(this.showError.bind(this))
  }

  addLeycoValues(researchId: number, values: Indicator[]) {
    let params = [];
    params.push(researchId);
    values.forEach(value => params.push(value.value));
    this.db.executeSql(`
        INSERT INTO leyco(researchId,ind_1,ind_2,ind_3,ind_4,ind_5,ind_6,ind_7)
        VALUES(?,?,?,?,?,?,?,?)`, params)
      .then(data => {
      })
      .catch(this.showError.bind(this))
  }

  showError(error) {
    this.alertCtrl.create({title: 'Ошибка', subTitle: error.message, buttons: ['OK']}).present();
  }


}
