import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ListarclientesPage } from './listarclientes';

@NgModule({
  declarations: [
    ListarclientesPage,
  ],
  imports: [
    IonicPageModule.forChild(ListarclientesPage),
  ],
})
export class ListarclientesPageModule {}
