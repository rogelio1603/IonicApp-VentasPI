import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { ListarclientesPage } from '../listarclientes/listarclientes';
import { ListarproductosPage } from '../listarproductos/listarproductos';
import { Storage } from '@ionic/storage';
import { NegocioProvider } from '../../providers/negocio/negocio';

/**
 * Generated class for the AgregarventaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-agregarventa',
  templateUrl: 'agregarventa.html',
})
export class AgregarventaPage {
  idcliente:any;
  idproducto:any;
  ncliente:any;
  nproducto:any;
  cantidad:any;
  precio:any;
  totalapagar:any;
  mensaje:any;
  fecha:any;
  pagoenabonos:boolean = false;
  pagado:boolean = false;

  constructor(public navCtrl: NavController, 
  	public navParams: NavParams,
  	public modalCtrl: ModalController,
  	private storage: Storage,
  	public negocio:NegocioProvider) {
  }

  isReadonly(){
  	return true;
  }

  ionViewDidEnter(){
	this.storage.get('ncliente').then((nombre) =>{
		if (nombre != null)
			this.ncliente = nombre;
    })

    this.storage.get('nproducto').then((nombre)=>{
    	if (nombre != null)
    		this.nproducto = nombre;
    })

    this.storage.get('precio').then((precio)=>{
    	this.precio = precio;
    })

    this.storage.get('idcliente').then((idcliente) => {
    	this.idcliente = idcliente;
    })

    this.storage.get('idproducto').then((idproducto) => {
    	this.idproducto = idproducto;
    })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AgregarventaPage');
  }

  PickCliente(){
  	this.navCtrl.push(ListarclientesPage, { venta: true });

  }

  PickProducto(){
	this.navCtrl.push(ListarproductosPage, { venta: true });
  }

  CalcularPago(){
  	this.totalapagar = (this.cantidad * this.precio);
  }

  PagoEnAbonos(val){
  	this.pagoenabonos = val;
  }

  ToggleCheckbox(){
  	this.pagado = !this.pagado;
  }

  AgregarVenta(){
  	let venta = {
  	'fecha': String(this.fecha), 
		'idproducto': String(this.idproducto), 
		'idcliente': String(this.idcliente), 
		'cantidad': String(this.cantidad), 
		'totalapagar': String(this.totalapagar),
		'pagoenabonos': String(this.pagoenabonos ? 1 : 0),
		'pagado': String(this.pagado ? 1 : 0)
	};
	//alert(JSON.stringify(venta));
	
		this.negocio.putVenta(venta)
		.subscribe(
			(data) => { // Success
		    	this.mensaje = data;
		    	if(this.mensaje.status=="ok"){
		    		alert("¡¡Venta registrada!!");
            this.navCtrl.pop();
		    	}
		    	else
		    		alert("No se pudo agregar la venta");
			  },
			(error) =>{
			    alert("Error al agregar la venta!!");
			    console.error(error);
		  	}
		)
		
	}

}