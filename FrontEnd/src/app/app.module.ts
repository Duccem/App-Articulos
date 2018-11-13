import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router'

import { MaterialModule } from './material';

import { AppComponent } from './app.component';
import { ArticulosComponent } from './components/articulos/articulos.component';
import { DialogArticuloShowComponent } from './components/dialog-articulo-show/dialog-articulo-show.component';
import { DialogArticuloCreateComponent } from './components/dialog-articulo-create/dialog-articulo-create.component';
import { PrincipalPanelComponent } from './components/principal-panel/principal-panel.component';
import { ControllerComponent } from './components/controller/controller.component';

@NgModule({
  declarations: [
    AppComponent,
    ArticulosComponent,
    DialogArticuloShowComponent,
    DialogArticuloCreateComponent,
    PrincipalPanelComponent,
    ControllerComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialModule,
    RouterModule.forRoot([
         {path:'new',component:DialogArticuloCreateComponent},
         {path:'edit/:id',component:DialogArticuloCreateComponent},
         {path:'show',component:DialogArticuloShowComponent},
         {path:'inicio',component:ArticulosComponent},
         {path:'',redirectTo:'inicio', pathMatch:'full'}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
