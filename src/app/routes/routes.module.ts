import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { SignUpComponent } from '../sign-up/sign-up.component';
import { HomepageComponent } from '../homepage/homepage.component';
import { LogInComponent } from '../log-in/log-in.component';
import { MyshedComponent } from '../myshed/myshed.component';
import { MygroupsComponent } from '../mygroups/mygroups.component';
import { CommunityShedComponent } from '../community-shed/community-shed.component';
import { RequestFormComponent } from '../request-form/request-form.component';
import { GroupdetailsComponent } from '../groupdetails/groupdetails.component';
import { TooldetailsComponent } from '../tooldetails/tooldetails.component';
import { NewGroupFormComponent } from '../new-group-form/new-group-form.component';
import { InvitegroupmemberComponent } from '../invitegroupmember/invitegroupmember.component';
import { ToolFormComponent } from '../tool-form/tool-form.component';
import { AddimageComponent } from '../addimage/addimage.component';
import { InvitenewuserComponent } from '../invitenewuser/invitenewuser.component';


const routes: Routes = [
  { path: '', redirectTo: '/homepage', pathMatch: 'full' },
  { path: 'homepage',  component: HomepageComponent },
  { path: 'signup',  component: SignUpComponent },
  { path: 'login',  component: LogInComponent },
  { path: 'mygroups',  component: MygroupsComponent },
  { path: 'communityshed', component: CommunityShedComponent },
  { path: 'requestform/:id', component: RequestFormComponent },
  { path: 'myshed', component: MyshedComponent },
  { path: 'groupdetails/:id', component: GroupdetailsComponent },
  { path: 'tooldetails/:id', component: TooldetailsComponent },
  { path: 'newgroupform', component: NewGroupFormComponent },
  { path: 'invitegroupmember', component: InvitegroupmemberComponent },
  { path: 'invitegroupmember/:id', component: InvitegroupmemberComponent },
  { path: 'toolform', component: ToolFormComponent },
  { path: 'toolform/:id', component: ToolFormComponent },
  { path: 'addimage/:id', component: AddimageComponent},
  // { path: 'invitenewuser', component: InvitenewuserComponent },
  { path: 'invite/:inviteKey', component: InvitenewuserComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class RoutesModule { }
