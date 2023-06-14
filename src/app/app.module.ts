import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProductoComponent } from './producto/producto.component';
import { ApiService } from './service/api.service';
import { RouterModule, Routes } from '@angular/router';
import { ContatosComponent } from './contatos/contatos.component';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { NgOptimizedImage } from '@angular/common';
import { FilterPipe } from './Pipes/filter.pipe';
import { AccionProductoComponent } from './accion-producto/accion-producto.component';


const Approutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'producto', component: ProductoComponent },
  { path: 'contacto', component: ContatosComponent },
  
];

@NgModule({
  declarations: [
    AppComponent,
    ProductoComponent,
    ContatosComponent,
    HomeComponent,
    FilterPipe,
    AccionProductoComponent,
    
  ],
  imports: [
    RouterModule.forRoot(Approutes),
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgOptimizedImage
  
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
