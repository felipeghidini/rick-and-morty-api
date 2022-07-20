import { Component, OnInit } from '@angular/core';
import { ListApiService } from 'src/app/service/list-api.service';

@Component({
  selector: 'app-list-api',
  templateUrl: './list-api.component.html',
  styleUrls: ['./list-api.component.css']
})
export class ListApiComponent implements OnInit {

  personagens: Array<any> = [];

  constructor(private listService: ListApiService) { }

  ngOnInit(): void {
    this.getListPersonagens();
  }

  getListPersonagens() {
    this.listService.getList().subscribe(result => {
      this.personagens = result.results;
      console.log(result.name);
      console.log(result.status);
    })
  }

}
