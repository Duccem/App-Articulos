import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Articulo } from '../models/articulo';
import { AppComponent } from '../app.component';

@Injectable({
  providedIn: 'root'
})
export class ArticulosService {
          selectedArticulo: Articulo;//el menu seleccionado
          articulos: Articulo[];//arreglo de menus devuelto
          readonly URL_API = 'http://localhost:3000/api/articulos';//URL de la URL_API
          constructor(private http: HttpClient) {
               this.selectedArticulo = new Articulo();
          }

          getArticulos(){
               return this.http.get(this.URL_API);
          }
          getArticulosByName(e:string){
               return this.http.post(this.URL_API,{busqueda:e});
          }
          createArticulo(articulo:Articulo){
               return this.http.post(this.URL_API+'/create',articulo);
          }
          editArticulo(articulo:Articulo){
               console.log(articulo._id);
               return this.http.put(this.URL_API+'/'+articulo._id,articulo);
          }
          deleteArticulo(_id:string){
               return this.http.delete(this.URL_API+'/'+_id);
          }
}
