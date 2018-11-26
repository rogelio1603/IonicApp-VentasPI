import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

import { NegocioProvider } from '../../providers/negocio/negocio'

import { ModalController } from 'ionic-angular';

import { AgregarproductoPage } from '../../pages/agregarproductos/agregarproductos';

import { DetalleproductoPage } from '../../pages/detalleproducto/detalleproducto';

import { ActionSheetController } from 'ionic-angular';

import { AlertController } from 'ionic-angular';

import { LoadingController } from 'ionic-angular';

import { ToastController } from 'ionic-angular';

 

@Component({

  selector: 'page-listarproductos',

  templateUrl: 'listarproductos.html',

  providers:[NegocioProvider]

})

export class ListarproductosPage {

 

  productos: any[] = [];

  mensaje:any;

 

  constructor(public navCtrl: NavController,

    public negocio:NegocioProvider,

    public modalCtrl : ModalController,

    public actionSheetCtrl: ActionSheetController,

    private alertCtrl: AlertController,

    public loadingCtrl: LoadingController,

    public toastCtrl: ToastController) {

  

  }

 

  eliminarProducto(idproducto)

  {

    this.negocio.deleteProducto(idproducto)

    .subscribe(

      (data) => { // Success

        this.mensaje = data;

        if(this.mensaje.status=="ok")

        {

          this.ionViewDidEnter();

          const toast = this.toastCtrl.create({

            message: 'Producto elininado',

            duration: 3000

          });

          toast.present();

       

        }

        else

        {

          const toast = this.toastCtrl.create({

            message: 'No se pudo eliminar el producto!!',

            duration: 3000

          });

          toast.present();  

        }

       

      },

      (error) =>{

        alert("Error al agregar el producto!!");

        console.error(error);

      }

 

    )

  }

 

 

  cargarProductos()

  {

    //alert("paso1!!!");

    this.negocio.getProductos()

    .subscribe(

      (data) => { // Success

        this.productos = data['records'];

     

      },

      (error) =>{

        alert("Error!!");

        console.error(error);

      }

 

    )

 

  }

 

  ionViewDidLoad()

  {

  this.cargarProductos(); 

  }

 

  ionViewDidEnter() {

    this.cargarProductos();

}

 

  public openModal()

  {

 

    this.navCtrl.push(AgregarproductoPage);

 

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

              message: '¿Realmente quieres eliminar este producto?',

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

                      content: "Eliminando producto...",

                      duration: 3000

                    });

                    loader.present();

 

                    ///

                    this.eliminarProducto(item.idproducto);

                   

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

            this.navCtrl.push(DetalleproductoPage,item) ;

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