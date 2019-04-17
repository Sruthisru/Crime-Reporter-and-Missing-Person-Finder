import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthService } from './auth.service'

const routes: Routes = [
  { path: '', redirectTo: 'firstpage', pathMatch: 'full' },
 // { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'register', loadChildren: './register/register.module#RegisterPageModule' },
  { path: 'login', loadChildren: './login/login.module#LoginPageModule' },
  { path: 'tabs', loadChildren: './tabs/tabs.module#TabsPageModule', canActivate: [AuthService] },
  { path: 'missingcasereg', loadChildren: './missingcasereg/missingcasereg.module#MissingcaseregPageModule' },
  { path: 'filecomplaint', loadChildren: './filecomplaint/filecomplaint.module#FilecomplaintPageModule' },
  { path: 'reportcrime', loadChildren: './reportcrime/reportcrime.module#ReportcrimePageModule' },
  { path: 'contact', loadChildren: './contact/contact.module#ContactPageModule' },
  { path: 'admintabs', loadChildren: './admintabs/admintabs.module#AdmintabsPageModule'},
  { path: 'profile', loadChildren: './profile/profile.module#ProfilePageModule' },
  { path: 'addmissingperson', loadChildren: './addmissingperson/addmissingperson.module#AddmissingpersonPageModule' },
  { path: 'listcomplaints', loadChildren: './listcomplaints/listcomplaints.module#ListcomplaintsPageModule' },
  { path: 'listcrimes', loadChildren: './listcrimes/listcrimes.module#ListcrimesPageModule' },
  { path: 'listmissing', loadChildren: './listmissing/listmissing.module#ListmissingPageModule' },
  { path: 'editprofile', loadChildren: './editprofile/editprofile.module#EditprofilePageModule' },
  { path: 'firstpage', loadChildren: './firstpage/firstpage.module#FirstpagePageModule' },
  { path: 'image', loadChildren: './image/image.module#ImagePageModule' },

  //{ path: 'profile', loadChildren: './account/profile/profile.module#ProfilePageModule' },
  //{ path: 'channel-messages', loadChildren: './tabs/chats/channel-messages/channel-messages.module#ChannelMessagesPageModule' },
  //{ path: 'channel-create', loadChildren: './tabs/chats/channel-create/channel-create.module#ChannelCreatePageModule' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
