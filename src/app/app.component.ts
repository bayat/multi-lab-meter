import {Component, OnInit} from '@angular/core';
import {Platform} from 'ionic-angular';
import {StatusBar} from '@ionic-native/status-bar';
import {SplashScreen} from '@ionic-native/splash-screen';
import {HomePage} from '../pages/home/home';
import {SQLite, SQLiteObject} from '@ionic-native/sqlite';

@Component({
  templateUrl: 'app.html'
})
export class MyApp implements OnInit {
  rootPage: any = HomePage;

  constructor(platform: Platform,
              statusBar: StatusBar,
              splashScreen: SplashScreen,
              private sqlite: SQLite) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }

  ngOnInit() {
    this.sqlite.create({
      name: 'data.db',
      location: 'default'
    })
      .then((db: SQLiteObject) => {

        // создание таблиц
        db.executeSql(`CREATE TABLE IF NOT EXISTS researches(
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        lastName NVARCHAR,
        firstName NVARCHAR,
        middleName NVARCHAR,
        dt TEXT,
        researchType INTEGER
      )`)
          .then(() => console.log('Executed SQL'))
          .catch(e => console.log(e));

      })
      .catch(e => console.log(e));
  }
}

