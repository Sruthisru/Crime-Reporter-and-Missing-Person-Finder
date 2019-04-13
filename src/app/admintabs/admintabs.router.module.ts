import { RouterModule,Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { AdmintabsPage } from './admintabs.page';
const routes: Routes = [
    {
        path: '',
        component: AdmintabsPage,
        children: [
            { path: 'adminhome', loadChildren: '../adminhome/adminhome.module#AdminhomePageModule' },
            { path: 'addmissingperson', loadChildren: '../addmissingperson/addmissingperson.module#AddmissingpersonPageModule' },
            { path: 'adminnotification', loadChildren: '../adminnotification/adminnotification.module#AdminnotificationPageModule' },
            { path: 'missingpersonsimage', loadChildren: '../missingpersonsimage/missingpersonsimage.module#MissingpersonsimagePageModule' },
            { path: 'adminaccount', loadChildren: '../adminaccount/adminaccount.module#AdminaccountPageModule' },
        ]
    }
];
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class AdmintabsRoutingModule { }
  
