import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
// You need "FormsModule" to use "ngModel" in your components

import { AppComponent } from './app.component';
import { FormsComponent } from './forms/forms.component';

@NgModule({
  declarations: [
    AppComponent,
    FormsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule    // You need to put "FormsModule" here for it to work
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
