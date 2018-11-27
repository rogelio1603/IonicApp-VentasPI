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

    var uri="http://localhost/providers/actualizarproducto.php?nombre="+registro.nombre

              +"&cantidad="+registro.cantidad

              +"&precioventa="+registro.precioventa

              +"&preciocosto="+registro.preciocosto

              +"&descripcion="+registro.descripcion

              +"&fotografia="+registro.fotografia

              +"&idproducto="+registro.idproducto;

              var encoded = encodeURI(uri); 

          //    alert("encoded="+encoded) ;     

    return this.http.get(encoded);

  }

 

  putProducto(registro)

  {

    var uri="http://localhost/providers/agregarproducto.php?nombre="+registro.nombre

              +"&cantidad="+registro.cantidad

              +"&precioventa="+registro.precioventa

              +"&preciocosto="+registro.preciocosto

              +"&descripcion="+registro.descripcion

              +"&fotografia="+registro.fotografia

              +"&idvendedor="+1;

              var encoded = encodeURI(uri); 

          //    alert("encoded="+encoded) ;     

    return this.http.get(encoded);

  }

 

  deleteProducto(idproducto)

  {

   

    return this.http.get('http://localhost/providers/eliminarproducto.php?idproducto='+idproducto);

  

  }

 

  getProductos()

  {

   

    return this.http.get('http://localhost/providers/listarproductos.php');

    //return this.http.get('https://randomuser.me/api/?results=25');

  }

 

}