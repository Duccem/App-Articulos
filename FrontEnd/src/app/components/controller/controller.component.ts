import { Component, OnInit } from '@angular/core';
import {ArticulosService} from '../../services/articulos.service';
import { Articulo } from '../../models/articulo';

@Component({
  selector: 'app-controller',
  templateUrl: './controller.component.html',
  styleUrls: ['./controller.component.css']
})
export class ControllerComponent implements OnInit {

     constructor(private articuloService:ArticulosService) { }

     ngOnInit() {
     }
     filtrar(e){
          if(e.target.value !=""){
               this.articuloService.getArticulosByName(e.target.value)
                    .subscribe(res =>{
                         this.articuloService.articulos = res as Articulo[];
               });
          }else{
               this.limpiar();
          }

     }
     limpiar(){
          this.articuloService.getArticulos()
               .subscribe(res =>{
                    this.articuloService.articulos = res as Articulo[];
          });
     }
}
