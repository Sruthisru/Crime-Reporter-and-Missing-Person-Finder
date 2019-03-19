import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { MissingcaseregPage } from './missingcasereg.page';

const routes: Routes = [
  {
    path: '',
    component: MissingcaseregPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [MissingcaseregPage]
})
export class MissingcaseregPageModule {}
