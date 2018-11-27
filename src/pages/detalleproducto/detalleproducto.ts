import { Component } from '@angular/core';

import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { NegocioProvider } from '../../providers/negocio/negocio'

 

/**

 * Generated class for the DetalleproductoPage page.

 *

 * See https://ionicframework.com/docs/components/#navigation for more info on

 * Ionic pages and navigation.

 */

 

@IonicPage()

@Component({

  selector: 'page-detalleproducto',

  templateUrl: 'detalleproducto.html',

})

export class DetalleproductoPage {

 

  productox:any;

  mensaje:any;

  public producto=[];

 

  constructor(public navCtrl: NavController,

    public navParams: NavParams,

    public negocio:NegocioProvider) {

    let data3 = this.navParams.data;

    console.log(data3); //this shows as {}

    this.producto=data3;

  }

 

  ionViewDidLoad() {

    console.log('ionViewDidLoad DetalleproductoPage');

  }

 

  ActualizarProducto()

  {

 

    this.negocio.updateProducto(this.producto)

    .subscribe(

      (data) => { // Success

        this.mensaje = data;

        if(this.mensaje.status=="ok")

        {

        alert("Producto actualizado!!");

        //this.navParams.get("HomePage").someFnToUpdateParent();

        //this.navCtrl.pop();

        }

        else

        alert("No se pudo actualizar el producto");

      },

      (error) =>{

        alert("Error al actualizar el producto!!");

        console.error(error);

      }

 

    )

  }

}