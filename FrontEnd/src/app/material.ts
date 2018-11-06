import { MatButtonModule } from '@angular/material';
import { MatIconModule } from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSelectModule} from '@angular/material/select';
import {NgModule} from '@angular/core';

@NgModule({
  imports: [MatButtonModule,MatIconModule, MatInputModule,MatToolbarModule,MatSelectModule],
  exports: [MatButtonModule,MatIconModule,MatInputModule,MatToolbarModule,MatSelectModule],
})
export class MaterialModule { }
