import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
//import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';
import { AdmintabsRoutingModule } from './admintabs.router.module'
import { AdmintabsPage } from './admintabs.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdmintabsRoutingModule
  ],
  declarations: [AdmintabsPage]
})
export class AdmintabsPageModule {}
