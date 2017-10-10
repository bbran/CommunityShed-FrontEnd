import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { NavigationComponent } from './navigation/navigation.component';

import { HomepageComponent } from './homepage/homepage.component';


@NgModule({
  declarations: [
    AppComponent,

    NavigationComponent

    HomepageComponent

  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
