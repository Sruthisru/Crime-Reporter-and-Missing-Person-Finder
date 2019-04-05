import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
//import { AuthService } from './auth.service'
const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
 // { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'register', loadChildren: './register/register.module#RegisterPageModule' },
  { path: 'login', loadChildren: './login/login.module#LoginPageModule' },
  { path: 'tabs', loadChildren: './tabs/tabs.module#TabsPageModule'},
  { path: 'missingcasereg', loadChildren: './missingcasereg/missingcasereg.module#MissingcaseregPageModule' },
  { path: 'filecomplaint', loadChildren: './filecomplaint/filecomplaint.module#FilecomplaintPageModule' },
  { path: 'reportcrime', loadChildren: './reportcrime/reportcrime.module#ReportcrimePageModule' },
  { path: 'contact', loadChildren: './contact/contact.module#ContactPageModule' },
  { path: 'admintabs', loadChildren: './admintabs/admintabs.module#AdmintabsPageModule'},
  { path: 'profile', loadChildren: './profile/profile.module#ProfilePageModule' },
  //{ path: 'profile', loadChildren: './account/profile/profile.module#ProfilePageModule' },
  //{ path: 'channel-messages', loadChildren: './tabs/chats/channel-messages/channel-messages.module#ChannelMessagesPageModule' },
  //{ path: 'channel-create', loadChildren: './tabs/chats/channel-create/channel-create.module#ChannelCreatePageModule' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
