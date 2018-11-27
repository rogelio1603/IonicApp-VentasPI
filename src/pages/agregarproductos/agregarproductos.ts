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

  selector: 'page-agregarproductos',

  templateUrl: 'agregarproductos.html',

})

export class AgregarproductosPage {

 

  mensaje:any;

  public producto=[];

  constructor(public navCtrl: NavController, public navParams: NavParams,public negocio:NegocioProvider) {

 

  }

 

  ionViewDidLoad() {

    console.log('ionViewDidLoad AgregarproductosPage');

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