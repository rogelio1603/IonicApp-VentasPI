import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ActionSheetController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { AgregarabonoPage } from '../agregarabono/agregarabono';
import { DetalleabonoPage } from '../detalleabono/detalleabono';
@Component({
  selector: 'page-listarabonos',
  templateUrl: 'listarabonos.html'
})
export class ListarabonosPage {

  constructor(public navCtrl: NavController,
    public actionSheetCtrl: ActionSheetController,
    public alertCtrl: AlertController){

    }

    AgregarVenta(){
      this.navCtrl.push(AgregarabonoPage);
    }

    mostrarConfirmacion() {
      const confirm = this.alertCtrl.create({
        title: 'Esta usted seguro de eliminar el registro?',
        message: 'Si realmente usted esta seguro de eliminarlo seleccione',
        buttons: [
          {
            text: 'Cancelar',
            handler: () => {
              console.log('Disagree clicked');
            }
          },
          {
            text: 'Si estoy de acuerdo',
            handler: () => {
              console.log('Agree clicked');
            }
          }
        ]
      });
      confirm.present();
    }

    presentarAcciones() {
      const actionSheet = this.actionSheetCtrl.create({
        title: 'Selecciona',
        buttons: [
          {
            text: 'Eliminar',
            icon: 'trash',
            role: 'destructive',
            handler: () => {
              console.log('Destructive clicked');
              this.mostrarConfirmacion();

            }
          },{
            text: 'Editar',
            icon: 'md-create',
            handler: () => {
              console.log('Archive clicked');
              this.navCtrl.push(DetalleabonoPage);
            }
          },{
            text: 'Cancelar',
            role: 'cancel',
            handler: () => {
              console.log('Cancel clicked');
            }
          }
        ]
      });
      actionSheet.present();
    }
  
}
