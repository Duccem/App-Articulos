import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogConfig} from "@angular/material";
import { DialogArticuloCreateComponent } from '../dialog-articulo-create/dialog-articulo-create.component';
import { DialogArticuloShowComponent } from '../dialog-articulo-show/dialog-articulo-show.component';
@Component({
  selector: 'app-articulos',
  templateUrl: './articulos.component.html',
  styleUrls: ['./articulos.component.css']
})
export class ArticulosComponent implements OnInit {

  constructor(private dialog: MatDialog) { }

  ngOnInit() {
  }

     openDialogShow(){
          const dialogConfig = new MatDialogConfig();
          dialogConfig.disableClose = true;
          dialogConfig.autoFocus = true;
          dialogConfig.height = '550px';
          dialogConfig.width = '700px';
          this.dialog.open(DialogArticuloShowComponent, dialogConfig);
     }
     openDialogCreate(){
          const dialogConfig = new MatDialogConfig();
          dialogConfig.disableClose = true;
          dialogConfig.autoFocus = true;
          dialogConfig.height = '550px';
          dialogConfig.width = '700px';

          this.dialog.open(DialogArticuloCreateComponent, dialogConfig);
     }
}
