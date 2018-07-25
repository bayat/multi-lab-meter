import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {DbService} from '../../services/db.service';
import {Research} from '../../models/research.model';
import {ResearchType} from '../../enums/research-type.enum';

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

  openResultPage(item: Research) {

  }

  getItems(ev: any) {
    this.searchItems(ev.target.value);
  }

}
