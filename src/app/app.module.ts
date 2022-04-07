import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ReactiveFormsModule } from '@angular/forms';
import { FormlyModule } from '@ngx-formly/core';
import { FormlyMaterialModule } from '@ngx-formly/material';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FormsWhitFormlyComponent } from './components/forms-whit-formly/forms-whit-formly.component';
import { FormsWhitReactiveFormsComponent } from './components/forms-whit-reactive-forms/forms-whit-reactive-forms.component';
import { MaterialModule } from './material/material.module';

@NgModule({
  declarations: [AppComponent, NavbarComponent, FormsWhitFormlyComponent, FormsWhitReactiveFormsComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormlyModule.forRoot(),
    FormlyMaterialModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
