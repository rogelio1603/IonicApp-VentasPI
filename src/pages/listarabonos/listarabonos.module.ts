import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ListarabonosPage } from './listarabonos';

@NgModule({
  declarations: [
    ListarabonosPage,
  ],
  imports: [
    IonicPageModule.forChild(ListarabonosPage),
  ],
})
export class ListarabonosPageModule {}
