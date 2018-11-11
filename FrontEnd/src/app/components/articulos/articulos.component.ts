import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogConfig} from "@angular/material";
import { DialogArticuloCreateComponent } from '../dialog-articulo-create/dialog-articulo-create.component';
@Component({
  selector: 'app-articulos',
  templateUrl: './articulos.component.html',
  styleUrls: ['./articulos.component.css']
})
export class ArticulosComponent implements OnInit {

  constructor(private dialog: MatDialog) { }

  ngOnInit() {
  }
     openDialog(){
          const dialogConfig = new MatDialogConfig();
          dialogConfig.disableClose = true;
          dialogConfig.autoFocus = true;
          dialogConfig.height = '550px';
          dialogConfig.width = '700px';
          this.dialog.open(DialogArticuloCreateComponent, dialogConfig)
     }
}
