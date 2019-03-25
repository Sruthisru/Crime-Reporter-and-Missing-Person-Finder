import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
//import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ChannelCreatePage } from './channel-create.page';
/*
const routes: Routes = [
  {
    path: '',
    component: ChannelCreatePage
  }
];
*/
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule
   // RouterModule.forChild(routes)
  ],
  declarations: [ChannelCreatePage],
  entryComponents: [
    ChannelCreatePage
    ]
})
export class ChannelCreatePageModule {}