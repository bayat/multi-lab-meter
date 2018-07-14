import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {CytoPage} from '../cyto/cyto';
import {MyeloPage} from '../myelo/myelo';
import {LeycoPage} from '../leyco/leyco';
import {ArchivePage} from '../archive/archive';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  cytoPage = CytoPage;
  myeloPage = MyeloPage;
  leycoPage = LeycoPage;
  archivePage = ArchivePage;

  constructor(public navCtrl: NavController) {

  }

  openPage(page: any) {
    this.navCtrl.push(page);
  }

}
