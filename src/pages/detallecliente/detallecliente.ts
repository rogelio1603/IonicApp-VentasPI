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

  selector: 'page-detallecliente',

  templateUrl: 'detallecliente.html',

})

export class DetalleclientePage {

 

  clientex:any;

  mensaje:any;

  public cliente=[];

 

  constructor(public navCtrl: NavController,

    public navParams: NavParams,

    public negocio:NegocioProvider) {

    let data3 = this.navParams.data;

    console.log(data3); //this shows as {}

    this.cliente=data3;

  }

 

  ionViewDidLoad() {

    console.log('ionViewDidLoad DetalleclientePage');

  }

 

  ActualizarCliente()

  {

 

    this.negocio.updateCliente(this.cliente)

    .subscribe(

      (data) => { // Success

        this.mensaje = data;

        if(this.mensaje.status=="ok")

        {

        alert("Cliente actualizado!!");

        //this.navParams.get("HomePage").someFnToUpdateParent();

        //this.navCtrl.pop();

        }

        else

        alert("No se pudo actualizar el cliente");

      },

      (error) =>{

        alert("Error al actualizar el cliente!!");

        console.error(error);

      }

 

    )

  }

}