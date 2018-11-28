import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { NegocioProvider } from '../../providers/negocio/negocio';
import { ListarclientesPage } from '../listarclientes/listarclientes';
import { ListarproductosPage } from '../listarproductos/listarproductos';

@IonicPage()
@Component({
  selector: 'page-detalleventa',
  templateUrl: 'detalleventa.html',
})
export class DetalleventaPage {
  mensaje:any;
  venta:any;

  constructor(public navCtrl: NavController, 
			  	public navParams: NavParams,
			  	public modalCtrl: ModalController,
			  	private storage: Storage,
			  	public negocio:NegocioProvider) {
  	let data3 = this.navParams.data;

    this.venta=data3;

  }

  isReadonly(){
  	return true;
  }

  PickCliente(){
  	this.navCtrl.push(ListarclientesPage, { venta: true });
  }

  PickProducto(){
	this.navCtrl.push(ListarproductosPage, { venta: true });
  }

  CalcularPago(){
  	this.venta.totalapagar = (this.venta.cantidad * this.venta.preciodeventa);
  }

  PagoEnAbonos(val){
  	this.venta.pagoenabonos = val;
  }

  ToggleCheckbox(){
  	if (this.venta.pagado == '0')
  		this.venta.pagado = '1';
  	else
  		this.venta.pagado = '0';

  	//this.venta.pagado = !this.venta.pagado;
  	alert(this.venta.pagado)
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetalleventaPage');
  }

  ionViewDidEnter(){
  	this.storage.get('ncliente').then((nombre) =>{
		if (nombre != null)
			this.venta.nombre = nombre;
    })

    this.storage.get('nproducto').then((nombre)=>{
    	if (nombre != null)
    		this.venta.nproducto = nombre;
    })

    this.storage.get('precio').then((precio)=>{
    	this.venta.preciodeventa = precio;
    })
  }

  EditarVenta(){

  	let ventaNueva = {
  		'idventa': String(this.venta.idventa),
  		'fecha': String(this.venta.fecha), 
		'idproducto': String(this.venta.idproducto), 
		'idcliente': String(this.venta.idcliente), 
		'cantidad': String(this.venta.cantidad), 
		'totalapagar': String(this.venta.totalapagar),
		'pagoenabonos': String(this.venta.pagoenabonos == true ? 1 : 0),
		'pagado': String(this.venta.pagado == true ? 1 : 0)
	};
	//alert(JSON.stringify(ventaNueva))
	
		this.negocio.updateVenta(ventaNueva)
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
