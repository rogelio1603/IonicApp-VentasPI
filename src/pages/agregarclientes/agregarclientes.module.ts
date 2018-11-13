import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AgregarclientesPage } from './agregarclientes';

@NgModule({
  declarations: [
    AgregarclientesPage,
  ],
  imports: [
    IonicPageModule.forChild(AgregarclientesPage),
  ],
})
export class AgregarclientesPageModule {}
