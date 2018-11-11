import { MatButtonModule } from '@angular/material';
import { MatIconModule } from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSelectModule} from '@angular/material/select';
import {MatDialogModule} from '@angular/material/dialog';
import {NgModule} from '@angular/core';

@NgModule({
  imports: [MatButtonModule,MatIconModule, MatInputModule,
       MatToolbarModule,MatSelectModule,MatDialogModule],
  exports: [MatButtonModule,MatIconModule,MatInputModule,
       MatToolbarModule,MatSelectModule,MatDialogModule],
})
export class MaterialModule { }
