import {Injectable} from '@angular/core';
import {SQLite, SQLiteObject} from '@ionic-native/sqlite';

@Injectable()
export class DbService {
  private db: SQLiteObject;

  constructor(private sqlite: SQLite) {
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
          .then(() => console.log('Executed SQL'))
          .catch(e => console.log(e));

        db.executeSql(`
          CREATE TABLE IF NOT EXISTS cyto(
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            researchId INTEGER NOT NULL,
            col1 INTEGER NOT NULL,
            col2 INTEGER NOT NULL,
            col3 INTEGER NOT NULL,
            col4 INTEGER NOT NULL,
            col5 INTEGER NOT NULL,
            col6 INTEGER NOT NULL,
            col7 INTEGER NOT NULL,
            col8 INTEGER NOT NULL,
            col9 INTEGER NOT NULL,
            col10 INTEGER NOT NULL,
            col11 INTEGER NOT NULL,
            col12 INTEGER NOT NULL,
            col13 INTEGER NOT NULL,
            FOREIGN KEY(researchId) REFERENCES researches(id)
          )
        `);
      })
      .catch(e => console.log(e));
  }

}
