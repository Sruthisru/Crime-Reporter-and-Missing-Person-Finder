import { RouterModule,Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { AdmintabsPage } from './admintabs.page';
const routes: Routes = [
    {
        path: '',
        component: AdmintabsPage,
        children: [
            { path: 'adminhome', loadChildren: '../adminhome/adminhome.module#AdminhomePageModule' },
            { path: 'adminsearch', loadChildren: '../adminsearch/adminsearch.module#AdminsearchPageModule' },
            { path: 'adminnotification', loadChildren: '../adminnotification/adminnotification.module#AdminnotificationPageModule' },
            { path: 'adminaccount', loadChildren: '../adminaccount/adminaccount.module#AdminaccountPageModule' },
        ]
    }
];
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class AdmintabsRoutingModule { }
  
