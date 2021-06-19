import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EscritoresService } from '../escritores.service';
import { Escritor } from '../models/escritor.model';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.css']
})
export class DetalleComponent implements OnInit {

  escritor: Escritor;

  constructor(
    private activareRoute: ActivatedRoute,
    private escritoresService: EscritoresService
  ) { }

  ngOnInit() {
    this.activareRoute.params.subscribe(async params => {
      // console.log(params.escritorId);
      this.escritor = await this.escritoresService.getById(parseInt(params.escritorId));
      // console.log(this.escritor);
    });
  }

}
