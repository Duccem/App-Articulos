import { Component, OnInit } from '@angular/core';
import {ArticulosService} from '../../services/articulos.service';
import { Articulo } from '../../models/articulo';

@Component({
  selector: 'app-articulos',
  templateUrl: './articulos.component.html',
  styleUrls: ['./articulos.component.css']
})
export class ArticulosComponent implements OnInit {

  constructor(private articuloService:ArticulosService) { }

  ngOnInit() {
       this.getArticulos();
  }
  getArticulos(){
       this.articuloService.getArticulos()
          .subscribe(res =>{
               this.articuloService.articulos = res as Articulo[];
          });
  }
  //import { ActivatedRoute } from '@angular/router';
  //private _route:ActivatedRoute
  //this._route.snapshot.paramMap.get('_id');

}
