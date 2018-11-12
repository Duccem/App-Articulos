import { Component } from '@angular/core';
import {ArticulosService} from './services/articulos.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[ArticulosService]
})
export class AppComponent {
  title = 'FrontEnd';
}
