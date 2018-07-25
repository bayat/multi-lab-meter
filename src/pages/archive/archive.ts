import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {DbService} from '../../services/db.service';
import {Research} from '../../models/research.model';
import {ResearchType} from '../../enums/research-type.enum';
import {CytoResultPage} from '../cyto-result/cyto-result';
import {MyeloResultPage} from '../myelo-result/myelo-result';
import {LeycoResultPage} from '../leyco-result/leyco-result';

@Component({
  selector: 'archive-page',
  templateUrl: 'archive.html'
})
export class ArchivePage {
  items: Research[] = [];

  constructor(public navCtrl: NavController,
              private dbService: DbService) {
  }

  searchItems(inputText: string) {
    if (inputText) {
      this.dbService.getDb().executeSql(`SELECT * FROM researches WHERE LOWER(lastName) LIKE ? ORDER BY DT DESC`, ['%' + inputText.toLowerCase() + '%'])
        .then(data => {
          this.items = [];
          if (data.rows.length > 0) {
            for (let i = 0; i < data.rows.length; i++) {
              this.items.push(data.rows.item(i));
            }
          }
        })
    } else {
      this.items = [];
    }
  }

  getResearchTypeName(researchType: ResearchType): string {
    if (researchType == ResearchType.CYTO) {
      return 'Цитоморфологические показатели БЭЩ';
    } else if (researchType == ResearchType.MYELO) {
      return 'Активность миелопероксидазы';
    } else {
      return 'Лейкоцитарная формула';
    }
  }

  openResultPage(research: Research) {
    this.dbService.getResearchValues(research.id, research.researchType)
      .then(researchValues => {
        let data = {};
        if (research.researchType == ResearchType.CYTO) {
          for (let i = 1; i <= 13; i++) {
            data[i] = researchValues['ind_' + i];
          }
          this.navCtrl.push(CytoResultPage, {data: data, saved: true})
        } else if (research.researchType == ResearchType.MYELO) {
          for (let i = 1; i <= 5; i++) {
            data[i] = researchValues['ind_' + i];
          }
          this.navCtrl.push(MyeloResultPage, {data: data, saved: true})
        } else if (research.researchType == ResearchType.LEYCO) {
          for (let i = 1; i <= 7; i++) {
            data[i] = researchValues['ind_' + i];
          }
          this.navCtrl.push(LeycoResultPage, {data: data, saved: true})
        }
      });
  }

  getItems(ev: any) {
    this.searchItems(ev.target.value);
  }

}
