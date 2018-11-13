import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ListarproductosPage } from './listarproductos';

@NgModule({
  declarations: [
    ListarproductosPage,
  ],
  imports: [
    IonicPageModule.forChild(ListarproductosPage),
  ],
})
export class ListarproductosPageModule {}
