import {BrowserModule} from '@angular/platform-browser';
import {ErrorHandler, NgModule} from '@angular/core';
import {IonicApp, IonicErrorHandler, IonicModule} from 'ionic-angular';
import {SplashScreen} from '@ionic-native/splash-screen';
import {StatusBar} from '@ionic-native/status-bar';

import {MyApp} from './app.component';
import {HomePage} from '../pages/home/home';
import {CytoPage} from '../pages/cyto/cyto';
import {MyeloPage} from '../pages/myelo/myelo';
import {LeycoPage} from '../pages/leyco/leyco';
import {ArchivePage} from '../pages/archive/archive';
import {ResultPage} from '../pages/result/result';
import {SavePage} from '../pages/save/save';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    CytoPage,
    MyeloPage,
    LeycoPage,
    ArchivePage,
    ResultPage,
    SavePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    CytoPage,
    MyeloPage,
    LeycoPage,
    ArchivePage,
    ResultPage,
    SavePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {
}