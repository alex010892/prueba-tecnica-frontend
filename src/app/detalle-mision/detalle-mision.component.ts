import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MisionesService } from '../misiones.service';

@Component({
  selector: 'app-detalle-mision',
  templateUrl: './detalle-mision.component.html',
  styleUrls: ['./detalle-mision.component.css']
})
export class DetalleMisionComponent implements OnInit {

  missionDetails: any['id'];

  constructor(
    private route: ActivatedRoute,
    private misionesService: MisionesService
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      const missionId = params['id'];
      this.misionesService.getLaunches(missionId).subscribe((details: any['id']) => {
        this.missionDetails = details;
      });
    });
  }
}
