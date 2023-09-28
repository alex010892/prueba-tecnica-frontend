import { Component, OnInit } from '@angular/core';
import { MisionesService } from '../misiones.service';

@Component({
  selector: 'app-lista-cohetes',
  templateUrl: './lista-cohetes.component.html',
  styleUrls: ['./lista-cohetes.component.css']
})
export class ListaCohetesComponent implements OnInit {

  cohetes: any[] = [];

  constructor(private misionesService: MisionesService) { }

  ngOnInit(): void {
    this.misionesService.getRockets().subscribe((cohetes: any) => {
      this.cohetes = cohetes;
    })
  }
}
