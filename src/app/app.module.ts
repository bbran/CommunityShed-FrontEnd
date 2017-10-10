import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { RouterModule }   from '@angular/router';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

import { LogInComponent } from './log-in/log-in.component';

import { NewGroupFormComponent } from './new-group-form/new-group-form.component';

import { NavigationComponent } from './navigation/navigation.component';

import { HomepageComponent } from './homepage/homepage.component';



@NgModule({
  declarations: [
    AppComponent,

    LogInComponent


    NewGroupFormComponent


    NavigationComponent

    HomepageComponent


  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
