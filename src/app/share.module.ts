import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { LoadingComponent } from './loading/loading.component';

@NgModule({
  
  imports: [
     IonicModule,
      FormsModule,
      CommonModule
    ],
  declarations: [LoadingComponent],
  exports: [
      LoadingComponent
  ]
})
export class ShareModule {}
