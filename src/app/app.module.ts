import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListarComponent } from './listar/listar.component';
import { ContactsComponent } from './contacts/contacts.component';
import { FiltrarComponent } from './filtrar/filtrar.component';

@NgModule({
  declarations: [
    AppComponent,
    ListarComponent,
    ContactsComponent,
    FiltrarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
