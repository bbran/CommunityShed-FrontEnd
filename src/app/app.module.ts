import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { RouterModule }   from '@angular/router';
import { HttpModule } from '@angular/http';
import { DataTablesModule } from 'angular-datatables';


import { AppComponent } from './app.component';
import { SignUpComponent } from './sign-up/sign-up.component';

import { LogInComponent } from './log-in/log-in.component';

import { NewGroupFormComponent } from './new-group-form/new-group-form.component';

import { NavigationComponent } from './navigation/navigation.component';

import { HomepageComponent } from './homepage/homepage.component';

import { RoutesModule }   from './routes/routes.module';

import { MygroupsComponent } from './mygroups/mygroups.component';

import { CommunityShedComponent } from './community-shed/community-shed.component';

import { RequestFormComponent } from './request-form/request-form.component';

import { MyshedComponent } from './myshed/myshed.component';
import { TooldetailsComponent } from './tooldetails/tooldetails.component';




@NgModule({
  declarations: [
    AppComponent,
    SignUpComponent,
    LogInComponent,
    NewGroupFormComponent,
    NavigationComponent,
    HomepageComponent,
    MygroupsComponent,
    CommunityShedComponent,
    RequestFormComponent,
    MyshedComponent,
    TooldetailsComponent


  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule,
    HttpModule,
    RoutesModule,
    DataTablesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
