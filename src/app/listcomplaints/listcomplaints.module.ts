import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ListcomplaintsPage } from './listcomplaints.page';

const routes: Routes = [
  {
    path: '',
    component: ListcomplaintsPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ListcomplaintsPage]
})
export class ListcomplaintsPageModule {}
