import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NewGroupFormComponent } from './new-group-form/new-group-form.component';

@NgModule({
  declarations: [
    AppComponent,
    NewGroupFormComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
