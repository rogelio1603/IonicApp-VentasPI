import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';

import { AgregarventaPage } from '../pages/agregarventa/agregarventa';
import { DetalleventaPage } from '../pages/detalleventa/detalleventa';
import { AgregarclientesPage } from '../pages/agregarclientes/agregarclientes';
import { DetalleclientePage } from '../pages/detallecliente/detallecliente';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { ListarclientesPage } from '../pages/listarclientes/listarclientes';
import { ListarproductosPage } from '../pages/listarproductos/listarproductos';
import { AgregarproductosPage } from '../pages/agregarproductos/agregarproductos';
import { DetalleproductoPage } from '../pages/detalleproducto/detalleproducto';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    AgregarventaPage,
    DetalleventaPage,
    AgregarclientesPage,
    DetalleclientePage,
    ListarclientesPage,
    ListarproductosPage,
    AgregarproductosPage,
    DetalleproductoPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    AgregarventaPage,
    DetalleventaPage,
    AgregarclientesPage,
    DetalleclientePage,
    ListarclientesPage,
    ListarproductosPage,
    AgregarproductosPage,
    DetalleproductoPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
