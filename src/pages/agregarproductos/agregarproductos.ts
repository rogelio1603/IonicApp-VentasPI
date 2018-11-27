import { Component } from '@angular/core';

import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { NegocioProvider } from '../../providers/negocio/negocio'

//import { HomePage } from '../home/home';

/**

 * Generated class for the AgregarproductoPage page.

 *

 * See https://ionicframework.com/docs/components/#navigation for more info on

 * Ionic pages and navigation.

 */

 

@IonicPage()

@Component({

<<<<<<< HEAD
  selector: 'page-agregarproductos',

  templateUrl: 'agregarproductos.html',

})

export class AgregarproductosPage {

=======
  selector: 'page-agregarproducto',

  templateUrl: 'agregarproducto.html',

})

export class AgregarproductoPage {

>>>>>>> effb9bbdb98727054ea0f550633305606458dba9
 

  mensaje:any;

  public producto=[];

  constructor(public navCtrl: NavController, public navParams: NavParams,public negocio:NegocioProvider) {

 

  }

 

  ionViewDidLoad() {

<<<<<<< HEAD
    console.log('ionViewDidLoad AgregarproductosPage');
=======
    console.log('ionViewDidLoad AgregarproductoPage');
>>>>>>> effb9bbdb98727054ea0f550633305606458dba9

  }

 

  AgregarProducto()

  {

 

    this.negocio.putProducto(this.producto)

    .subscribe(

      (data) => { // Success

        this.mensaje = data;

        if(this.mensaje.status=="ok")

        {

        alert("Producto agregado!!");

        }

        else

        alert("No se pudo agregar el producto");

      },

      (error) =>{

        alert("Error al agregar el producto!!");

        console.error(error);

      }

 

    )

  }

}