import { Component, OnInit } from '@angular/core';
import {List, ListResponse} from '../../helpers/list';
import {ListService} from '../../services/list.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  columnsToDisplay = ['Eesnimi', 'Perekonnanimi', 'Sugu', 'Sünnikuupäev', 'Telefon'];
  page = 1;
  pageSize = 10;
  maxSize = 5;
  ellipses = false;
  collectionSize: number;
  listResponse: ListResponse;
  list: List[];
  letsContinue = false;
  constructor(private listService: ListService) {}

  ngOnInit(): void {
    this.getListResponse();
    this.refreshList();
    console.log(document.getElementsByClassName('clickable active'));

  }

  private getListResponse(): void {
    this.listService.getListResponse().subscribe((list) => {
      this.listResponse = list;
      this.collectionSize = list.stats.results;
      this.list = list.list;
      this.letsContinue = true;
      this.refreshList();
    });
  }

  refreshList(): void {
    if (this.letsContinue) {
      this.list = this.listResponse.list
        .map((list, i) => ({id: i + 1, ...list}))
        .slice((this.page - 1) * this.pageSize, (this.page - 1) * this.pageSize + this.pageSize);
    }
  }

  checkSex(sex: string): string {
    if (sex === 'f') { return 'Naine'; }
    return 'Mees';
  }
  findDetails(data: List): List[] {
    return this.list.filter(x => x.id === data.id);
  }
  check(): void {
    console.log(document.getElementsByClassName('clickable active'));
    console.log(document.getElementsByClassName('clickable active').length);
  }
}
