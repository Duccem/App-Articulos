import { Component, OnInit } from '@angular/core';
import {ArticulosService} from '../../services/articulos.service';
import { Articulo } from '../../models/articulo';
import {NgForm} from '@angular/forms';
import {MatSnackBar} from '@angular/material';

@Component({
  selector: 'app-dialog-articulo-create',
  templateUrl: './dialog-articulo-create.component.html',
  styleUrls: ['./dialog-articulo-create.component.css']
})
export class DialogArticuloCreateComponent implements OnInit {
     articulo:Articulo;
     constructor(private articuloService:ArticulosService,public snackBar: MatSnackBar) {
          this.articulo = new Articulo();
     }


     ngOnInit() {
     }
     crearArticulo(form:NgForm){
          this.articuloService.createArticulo(form.value)
               .subscribe(res =>{
                    this.openSnackBar("Articulo guardado!!");
                    form.reset();
                    this.articuloService.getArticulos()
                    .subscribe(res =>{
                         this.articuloService.articulos = res as Articulo[];
                    });
               });

     }
     openSnackBar(message:string) {
          this.snackBar.open(message,"Status", {
               duration: 500,
          });
  }
}
