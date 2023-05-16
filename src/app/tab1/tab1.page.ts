import { Component } from '@angular/core';
import { CategoriasService } from '../services/categorias/categorias.service';
import { Subscription } from 'rxjs';
import { Categoria } from '../modelos/categoria/categoria';
import { Productos } from '../modelos/productos/productos';
import { FacturasService } from '../services/facturas/facturas.service';
import { Facturas } from '../modelos/facturas/facturas';
import { Router } from '@angular/router';
import { Preferences } from '@capacitor/preferences';
import { UserService } from '../services/users/user.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  isModalOpen = false;
  setOpen(isOpen: boolean) {
    this.isModalOpen = isOpen;
  }
  public categoriaSubscription= new Subscription()
  public facturasSubscription= new Subscription()
  public categorias:Categoria[]=[];
  public productos:Productos[]=[];
  public reserva:Productos[]=[];
  public factura = new Facturas()
  public nuevo= new Productos()
  public id!:string
  public fecha= new Date()
  public p!:number
  public nombre!:string
  public vendedor!:string
  constructor(
    public categoriaService: CategoriasService,
    public facturasService: FacturasService,
    public userService: UserService,
    private link:Router,
    ) { }

  ngOnInit() {
    this.categoriaSubscription=this.categoriaService.Categorias$().subscribe((data:Categoria[])=>{
      this.categorias=data;

    })
    this.categoriaService.Getcategorias().then()
    this.Quien()

  }

  obtenerId(id:string){
    this.id=id
    this.categorias.forEach(element => {
      if(element.id===this.id){
        this.nombre=String(element.nombreC)
        this.productos=element.categoriaProductos
      }
    });
    }


  comprando(){
    let c=Number(this.nuevo.cant)
    let d=this.fecha.getDate()
    let m=this.fecha.getMonth()+1
    let a=this.fecha.getFullYear()
    this.factura.fecha=String(d+"/"+m+"/"+a)
    if(c>0){
    this.nuevo=this.productos[this.p]
    this.nuevo.cant=c
    this.factura.subtotal=0
    this.reserva.push(this.nuevo)
    this.reserva.forEach(element => {
      this.factura.subtotal=this.factura.subtotal+(element.cant*element.valor)
    });
    this.factura.iva=0.19*this.factura.subtotal
    this.factura.total=this.factura.subtotal+this.factura.iva
    console.log(this.factura.subtotal)
    this.nuevo= new Productos()
    }else{
      alert("ingresa la cantidad")
    }
  }

  pagar(){
    this.factura.vendedor=this.vendedor
    this.factura.Productosvendidos=this.reserva
    console.log(this.factura)
    this.facturasService.Postfacturas(this.factura)
    this.link.navigate(['/tabs/facturas'])
   }

   async Quien(){
    const { value } = await Preferences.get({ key: 'token' });
    if(value)
    this.userService.Quien(value).then((data)=>{
      this.vendedor=data.data
    })
  }
}
