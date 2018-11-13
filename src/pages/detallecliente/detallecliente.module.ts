import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DetalleclientePage } from './detallecliente';

@NgModule({
  declarations: [
    DetalleclientePage,
  ],
  imports: [
    IonicPageModule.forChild(DetalleclientePage),
  ],
})
export class DetalleclientePageModule {}
