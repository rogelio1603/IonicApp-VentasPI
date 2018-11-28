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

  selector: 'page-agregarclientes',

  templateUrl: 'agregarclientes.html',

})

export class AgregarclientesPage {

 

  mensaje:any;

  public cliente=[];

  constructor(public navCtrl: NavController, public navParams: NavParams,public negocio:NegocioProvider) {

 

  }

 

  ionViewDidLoad() {

    console.log('ionViewDidLoad AgregarclientesPage');

  }

 

  AgregarCliente()

  {

 

    this.negocio.putCliente(this.cliente)

    .subscribe(

      (data) => { // Success

        this.mensaje = data;

        if(this.mensaje.status=="ok")

        {

        alert("Cliente agregado!!");

        }

        else

        alert("No se pudo agregar el cliente");

      },

      (error) =>{

        alert("Error al agregar el cliente!!");

        console.error(error);

      }

 

    )

  }

}

 