import { HttpClient } from '@angular/common/http';

import { Injectable } from '@angular/core';

 

/*

  Generated class for the NegocioProvider provider.

 

  See https://angular.io/guide/dependency-injection for more info on providers

  and Angular DI.

*/

@Injectable()

export class NegocioProvider {

 

  constructor(public http: HttpClient) {

    console.log('Hello NegocioProvider Provider');

 

  }

 

  updateProducto(registro)

  {

    var uri="https://dp2018.000webhostapp.com/ionic/actualizarproducto.php?nombre="+registro.nombre

              +"&cantidad="+registro.cantidad

              +"&preciodeventa="+registro.preciodeventa

              +"&preciodecosto="+registro.preciodecosto

              +"&descripcion="+registro.descripcion

              +"&fotografia="+registro.fotografia

              +"&idproducto="+registro.idproducto;

              var encoded = encodeURI(uri); 

          //    alert("encoded="+encoded) ;     

    return this.http.get(encoded);

  }

 

  putProducto(registro)

  {

    var uri="https://dp2018.000webhostapp.com/ionic/agregarproducto.php?nombre="+registro.nombre

              +"&cantidad="+registro.cantidad

              +"&preciodeventa="+registro.preciodeventa

              +"&preciodecosto="+registro.preciodecosto

              +"&descripcion="+registro.descripcion

              +"&fotografia="+registro.fotografia;

              var encoded = encodeURI(uri); 

          //    alert("encoded="+encoded) ;     

    return this.http.get(encoded);

  }

 

  deleteProducto(idproducto)

  {

   

    return this.http.get('https://dp2018.000webhostapp.com/ionic/eliminarproducto.php?idproducto='+idproducto);

  

  }

 

  getProductos()

  {

   

    return this.http.get('https://dp2018.000webhostapp.com/ionic/listarproductos.php');

    //return this.http.get('https://randomuser.me/api/?results=25');

  }

 

}