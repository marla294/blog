import { BrowserModule } 			from '@angular/platform-browser';
import { NgModule } 				from '@angular/core';
import { BrowserAnimationsModule }	from '@angular/platform-browser/animations';
import { MatListModule }			from '@angular/material';

import { AppComponent } 			from './app.component';
import { HeaderComponent }			from './header.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
