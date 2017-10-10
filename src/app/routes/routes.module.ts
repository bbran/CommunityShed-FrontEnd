import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { SignUpComponent } from '../sign-up/sign-up.component';
import { HomepageComponent } from '../homepage/homepage.component';
import { LogInComponent } from '../log-in/log-in.component';

const routes: Routes = [
  { path: '', redirectTo: '/homepage', pathMatch: 'full' },
  { path: 'homepage',  component: HomepageComponent },
  { path: 'signup',  component: SignUpComponent },
  { path: 'login',  component: LogInComponent }
];


@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class RoutesModule { }
