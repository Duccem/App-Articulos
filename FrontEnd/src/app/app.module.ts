import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MaterialModule } from './material';

import { AppComponent } from './app.component';
import { ArticulosComponent } from './components/articulos/articulos.component';
import { DialogArticuloShowComponent } from './components/dialog-articulo-show/dialog-articulo-show.component';
import { DialogArticuloCreateComponent } from './components/dialog-articulo-create/dialog-articulo-create.component';
import { PrincipalPanelComponent } from './components/principal-panel/principal-panel.component';

@NgModule({
  declarations: [
    AppComponent,
    ArticulosComponent,
    DialogArticuloShowComponent,
    DialogArticuloCreateComponent,
    PrincipalPanelComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
