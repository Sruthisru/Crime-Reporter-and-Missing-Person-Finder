import { RouterModule,Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { ListcasePage } from './listcase.page';
const routes: Routes = [
    {
        path: '',
        component: ListcasePage,
        children: [
            { path: 'usercomplaint', loadChildren: '../usercomplaint/usercomplaint.module#UsercomplaintPageModule' },
            { path: 'usercrime', loadChildren: '../usercrime/usercrime.module#UsercrimePageModule' },
            { path: 'usermissing', loadChildren: '../usermissing/usermissing.module#UsermissingPageModule' },
          
        ]
    }
];
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class ListcaseRoutingModule { }
  
