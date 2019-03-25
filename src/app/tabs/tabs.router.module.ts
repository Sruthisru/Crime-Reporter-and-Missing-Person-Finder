import { RouterModule,Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { TabsPage } from './tabs.page';
const routes: Routes = [
    {
        path: '',
        component: TabsPage,
        children: [
            { path: 'home', loadChildren: '../home/home.module#HomePageModule' },
            { path: 'chats', loadChildren: './tabs/chats/chats.module#ChatsPageModule' },
            { path: 'search', loadChildren: '../search/search.module#SearchPageModule' },
            { path: 'account', loadChildren: '../account/account.module#AccountPageModule' },
        ]
    }
];
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class TabsRoutingModule { }
  
