import {BrowserModule} from '@angular/platform-browser';
import {ErrorHandler, NgModule} from '@angular/core';
import {IonicApp, IonicErrorHandler, IonicModule} from 'ionic-angular';
import {IonicStorageModule} from '@ionic/storage';
import {SplashScreen} from '@ionic-native/splash-screen';
import {StatusBar} from '@ionic-native/status-bar';

import {MyApp} from './app.component';
import {HomePage} from '../pages/home/home';
import {CytoPage} from '../pages/cyto/cyto';
import {MyeloPage} from '../pages/myelo/myelo';
import {LeycoPage} from '../pages/leyco/leyco';
import {ArchivePage} from '../pages/archive/archive';
import {CytoResultPage} from '../pages/cyto-result/cyto-result';
import {SavePage} from '../pages/save/save';
import {SQLite} from '@ionic-native/sqlite';
import {DbService} from '../services/db.service';
import {UtilsService} from '../services/utils.service';
import {MyeloResultPage} from '../pages/myelo-result/myelo-result';
import {LeycoResultPage} from '../pages/leyco-result/leyco-result';
import {SQLiteMock} from '../services/sqlite-object';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    CytoPage,
    MyeloPage,
    LeycoPage,
    ArchivePage,
    CytoResultPage,
    MyeloResultPage,
    LeycoResultPage,
    SavePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    CytoPage,
    MyeloPage,
    LeycoPage,
    ArchivePage,
    CytoResultPage,
    MyeloResultPage,
    LeycoResultPage,
    SavePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    //{provide: SQLite, useClass: SQLiteMock},
    SQLite,
    DbService,
    UtilsService
  ]
})
export class AppModule {
}
