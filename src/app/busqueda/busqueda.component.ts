import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { MisionesService } from '../misiones.service';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.css']
})
export class BusquedaComponent {
  nombre: string = '';
  misiones: any[] = [];
  cohetes: any[] = [];
  displayedColumns: string[] = ['name'];

  constructor(private http: HttpClient,
    private route: ActivatedRoute,
    private misionesService: MisionesService) { }

  buscar() {
    if (this.nombre.trim() !== '') {
      this.misionesService.getUpcomingLaunches().subscribe((launches: any) => {
        const allResults = [...launches];
        this.misiones = allResults.filter((result: any) =>
          result.name.toLowerCase().includes(this.nombre.toLowerCase())
        );
      });

      this.misionesService.getRockets().subscribe((rockets: any) => {
        const allResults = [...rockets];
        this.cohetes = allResults.filter((result: any) =>
          result.name.toLowerCase().includes(this.nombre.toLowerCase())
        );
      });
    } else {
      this.misiones = [];
      this.cohetes = [];
    }
  }
}
