import {Injectable} from '@angular/core';
import {SQLite, SQLiteObject} from '@ionic-native/sqlite';
import {Research} from '../models/research.model';
import {Indicator} from '../models/indicator.model';
import {ResearchType} from '../enums/research-type.enum';
import {UtilsService} from './utils.service';

@Injectable()
export class DbService {
  private db: SQLiteObject;

  constructor(private sqlite: SQLite,
              private utilsService: UtilsService) {
    this.initDb();
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
          .then(() => console.log('Executed SQL'))
          .catch(e => console.log(e));

        db.executeSql(`
          CREATE TABLE IF NOT EXIST cyto(
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
          .then(() => console.log('Executed SQL'))
          .catch(e => console.log(e));

        db.executeSql(`
          CREATE TABLE IF NOT EXIST myelo(
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
          .then(() => console.log('Executed SQL'))
          .catch(e => console.log(e));

        db.executeSql(`
          CREATE TABLE IF NOT EXIST leyco(
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
          .then(() => console.log('Executed SQL'))
          .catch(e => console.log(e));

      })
      .catch(e => console.log(e));
  }

  addResearch(researchType: ResearchType, researchData: Research, values: Indicator[]) {
    if (researchType == ResearchType.CYTO) {
      this.addCytoResearch(researchData, values);
    } else if (researchType == ResearchType.MYELO) {
      this.addMyeloResearch(researchData, values);
    } else if (researchType == ResearchType.LEYCO) {
      this.addLeycoResearch(researchData, values);
    }
  }

  addCytoResearch(researchData: Research, values: Indicator[]) {

  }

  addMyeloResearch(researchData: Research, values: Indicator[]) {
    let result = this.utilsService.getResultByMyeloIndicators(values);

  }

  addLeycoResearch(researchData: Research, values: Indicator[]) {

  }


}
