import { Component, OnInit } from '@angular/core';
import {ArticulosService} from '../../services/articulos.service';
import { Articulo } from '../../models/articulo';

@Component({
  selector: 'app-dialog-articulo-show',
  templateUrl: './dialog-articulo-show.component.html',
  styleUrls: ['./dialog-articulo-show.component.css']
})
export class DialogArticuloShowComponent implements OnInit {

  constructor(private articuloService:ArticulosService) { }

  ngOnInit() {
       
  }

  deselectArticulo(){
       this.articuloService.selectedArticulo = new Articulo();
 }
}
