import { Component, OnInit } from '@angular/core';
import {ArticulosService} from '../../services/articulos.service';
import { Articulo } from '../../models/articulo';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-dialog-articulo-create',
  templateUrl: './dialog-articulo-create.component.html',
  styleUrls: ['./dialog-articulo-create.component.css']
})
export class DialogArticuloCreateComponent implements OnInit {
     articulo:Articulo;
     constructor(private articuloService:ArticulosService) {
          this.articulo = new Articulo();
     }


     ngOnInit() {
     }
     crearArticulo(form:NgForm){
          console.log("guardando 1");
          this.articuloService.createArticulo(form.value)
               .subscribe(res =>{
                    console.log(res);
                    this.articuloService.getArticulos()
                    .subscribe(res =>{
                         this.articuloService.articulos = res as Articulo[];
                    });
               });

     }
}
