import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
//import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ListcasePage } from './listcase.page';
import { ListcaseRoutingModule } from './listcase.router.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListcaseRoutingModule
   // RouterModule.forChild(routes)
  ],
  declarations: [ListcasePage]
})
export class ListcasePageModule {}
