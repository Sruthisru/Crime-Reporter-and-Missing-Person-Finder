import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { MissingpersonsimagePage } from './missingpersonsimage.page';

const routes: Routes = [
  {
    path: '',
    component: MissingpersonsimagePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [MissingpersonsimagePage]
})
export class MissingpersonsimagePageModule {}
