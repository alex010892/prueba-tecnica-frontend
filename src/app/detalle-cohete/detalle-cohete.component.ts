import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MisionesService } from '../misiones.service';

@Component({
  selector: 'app-detalle-cohete',
  templateUrl: './detalle-cohete.component.html',
  styleUrls: ['./detalle-cohete.component.css']
})
export class DetalleCoheteComponent implements OnInit {

  detallesCohete: any;

  constructor(private route: ActivatedRoute, private misionesService: MisionesService) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const coheteId = params['id'];
      this.misionesService.getDetallesCohete(coheteId).subscribe((detalles: any) => {
        this.detallesCohete = detalles;
      })
    })
  }
}
