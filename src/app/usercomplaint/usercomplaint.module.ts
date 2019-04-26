import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { UsercomplaintPage } from './usercomplaint.page';

const routes: Routes = [
  {
    path: '',
    component: UsercomplaintPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [UsercomplaintPage]
})
export class UsercomplaintPageModule {}
