import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { ActionSheetController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { AgregarventaPage } from '../agregarventa/agregarventa';
import { DetalleventaPage } from '../detalleventa/detalleventa';
import { LoginPage } from '../login/login';
import { Storage } from '@ionic/storage';
import { NegocioProvider } from '../../providers/negocio/negocio';

import { ToastController } from 'ionic-angular';
import { LoadingController } from 'ionic-angular';

//@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {

  ventas:any[] = [];
  mensaje:any;
  esAbono:boolean;

  constructor(public navCtrl: NavController, 
			public navParams: NavParams, 
			public actionSheetCtrl: ActionSheetController,
			public alertCtrl: AlertController,
      public modalCtrl: ModalController,
      public loadingCtrl: LoadingController,
      public toastCtrl: ToastController,
      private storage: Storage,
      public negocio:NegocioProvider) {
    
    this.storage.set('idcliente', null);
    this.storage.set('ncliente', null);
    this.storage.set('idproducto', null);
    this.storage.set('nproducto', null);

    if (navParams.get('abono') != null){
      this.esAbono = true;
    }
  }

  cargarVentas()
  {
    //alert("paso1!!!");
    this.negocio.getVenta()
    .subscribe(
      (data) => { // Success
        this.ventas = data['records'];
      },
      (error) =>{
        alert("Error!!");
        console.error(error);
      }
    )
  }

  eliminarVenta(idventa)
  {
    this.negocio.deleteVenta(idventa)
    .subscribe(
      (data) => { // Success
        this.mensaje = data;
        if(this.mensaje.status=="ok")
        {
          this.ionViewDidEnter();
          const toast = this.toastCtrl.create({

            message: 'Venta eliminada',
            duration: 3000
          });
          toast.present();
        }
        else
        {
          const toast = this.toastCtrl.create({
            message: 'No se pudo eliminar la venta!!',
            duration: 3000
          });
          toast.present();  
        }
      },
      (error) =>{
        alert("Error al agregar la venta!!");
        console.error(error);
      }
    )
  }

  editarVenta(){
    this.navCtrl.push(DetalleventaPage);
  }

  agregarVenta(){
    this.navCtrl.push(AgregarventaPage);
  }
  
  mostrarConfirmacion() {
    const confirm = this.alertCtrl.create({
      title: 'Alerta',
      message: '¿Está seguro de eliminar esta venta?',
      buttons: [
        {
          text: 'Cancelar',
          handler: () => {
            console.log('Disagree clicked');
          }
        },
        {
          text: 'Sí, quiero eliminarla.',
          handler: () => {
            console.log('Agree clicked');
          }
        }
      ]
    });
    confirm.present();
  }
  
  public openDetalle(item)
  {
    if (!this.esAbono){
      const actionSheet = this.actionSheetCtrl.create({
        title: '¿Que quieres hacer?',
        buttons: [
          {
            text: 'Eliminar',
            icon:'trash',
            role: 'destructive',
            handler: () => {
              console.log('Destructive clicked');
              ///
              let alert = this.alertCtrl.create({
                title: 'Confirmar la eliminación',
                message: '¿Realmente quieres eliminar esta venta?',
                buttons: [
                  {
                    text: 'Cancelar',
                    role: 'cancel',
                    handler: () => {
                      console.log('Cancel clicked');
                    }
                  },
                  {
                    text: 'Eliminar',
                    handler: () => {
                      console.log('Eliminar clicked');
                      const loader = this.loadingCtrl.create({
                        content: "Eliminando venta...",
                        duration: 3000
                      });
                      loader.present();
                      ///
                      this.eliminarVenta(item.idventa);
                      ///
                    }
                  }
                ]
              });
              alert.present();
              ///
            }
          },{
            text: 'Editar',
            icon:'md-create',
            handler: () => {
              this.navCtrl.push(DetalleventaPage,item) ;
              console.log('Archive clicked');
            }
          },{
            text: 'Cancelar',
            icon:'md-close',
            role: 'cancel',
            handler: () => {
              console.log('Cancel clicked');
            }
          }
        ]
      });
      actionSheet.present();
    } else {
      this.storage.set('idventa',item.idventa);
      this.storage.set('ncliente',item.nombre);
      this.storage.set('nproducto',item.nproducto);
      this.navCtrl.pop();
    }
  }

  ionViewDidLoad() {
    this.cargarVentas();
  }

  ionViewDidEnter(){
    this.cargarVentas();
  }

}
