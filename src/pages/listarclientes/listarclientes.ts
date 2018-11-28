import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

import { NegocioProvider } from '../../providers/negocio/negocio'

import { ModalController } from 'ionic-angular';

import { AgregarclientesPage } from '../../pages/agregarclientes/agregarclientes';

import { DetalleclientePage } from '../../pages/detallecliente/detallecliente';

import { ActionSheetController } from 'ionic-angular';

import { AlertController } from 'ionic-angular';

import { LoadingController } from 'ionic-angular';

import { ToastController } from 'ionic-angular';

 

@Component({

  selector: 'page-listarclientes',

  templateUrl: 'listarclientes.html',

  providers:[NegocioProvider]

})

export class ListarclientesPage {

 

  clientes: any[] = [];

  mensaje:any;

 

  constructor(public navCtrl: NavController,

    public negocio:NegocioProvider,

    public modalCtrl : ModalController,

    public actionSheetCtrl: ActionSheetController,

    private alertCtrl: AlertController,

    public loadingCtrl: LoadingController,

    public toastCtrl: ToastController) {

  

  }

 

  eliminarCliente(idcliente)

  {

    this.negocio.deleteCliente(idcliente)

    .subscribe(

      (data) => { // Success

        this.mensaje = data;

        if(this.mensaje.status=="ok")

        {

          this.ionViewDidEnter();

          const toast = this.toastCtrl.create({

            message: 'Cliente eliminado',

            duration: 3000

          });

          toast.present();

       

        }

        else

        {

          const toast = this.toastCtrl.create({

            message: 'No se pudo eliminar el cliente!!',

            duration: 3000

          });

          toast.present();  

        }

       

      },

      (error) =>{

        alert("Error al agregar el cliente!!");

        console.error(error);

      }

 

    )

  }

 

 

  cargarClientes()

  {

    //alert("paso1!!!");

    this.negocio.getCliente()

    .subscribe(

      (data) => { // Success

        this.clientes = data['records'];

     

      },

      (error) =>{

        alert("Error!!");

        console.error(error);

      }

 

    )

 

  }

 

  ionViewDidLoad()

  {

  this.cargarClientes(); 

  }

 

  ionViewDidEnter() {

    this.cargarClientes();

}

 

  public openModal()

  {

 

    this.navCtrl.push(AgregarclientesPage);

 

  }

 

  public openDetalle(item)

  {

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

              message: '¿Realmente quieres eliminar este cliente?',

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

                      content: "Eliminando cliente...",

                      duration: 3000

                    });

                    loader.present();

 

                    ///

                    this.eliminarCliente(item.idproducto);

                   

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

            this.navCtrl.push(DetalleclientePage,item) ;

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




 

 

  }

 

}