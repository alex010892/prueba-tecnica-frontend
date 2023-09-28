import { Component, OnInit, inject, ViewEncapsulation } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MisionesService } from '../misiones.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css'],
})
export class InicioComponent implements OnInit {

  private router = inject(Router);
  launches: any[] = [];
  columnas: string[] = ['nombre', 'descripcion'];

  constructor(private misionesServicio: MisionesService) { }

  ngOnInit() {
    this.misionesServicio.getUpcomingLaunches().subscribe((launches: any) => {
      this.launches = launches;
    })
  }

  detalle(missionId: string) {
    this.router.navigate(['/detalle-mision', missionId]);
  }
}
