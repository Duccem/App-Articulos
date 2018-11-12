import { Component, OnInit } from '@angular/core';
import { DialogArticuloCreateComponent } from '../dialog-articulo-create/dialog-articulo-create.component';
import {MatDialog, MatDialogConfig} from "@angular/material";

@Component({
  selector: 'app-dialog-articulo-show',
  templateUrl: './dialog-articulo-show.component.html',
  styleUrls: ['./dialog-articulo-show.component.css']
})
export class DialogArticuloShowComponent implements OnInit {

  constructor(private dialog: MatDialog) { }

  ngOnInit() {
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
