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
  listResponse: ListResponse;
  list: List[];
  constructor(private listService: ListService) {}

  ngOnInit(): void {
    this.getListResponse();
  }

  private getListResponse(): void {
    this.listService.getList().subscribe((list) => {
      this.listResponse = list;
      this.list = list.list;
    });
  }

}
