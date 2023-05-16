import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Categoria } from 'src/app/modelos/categoria/categoria';
import { Facturas } from 'src/app/modelos/facturas/facturas';
import { Productos } from 'src/app/modelos/productos/productos';
import { CategoriasService } from 'src/app/services/categorias/categorias.service';
import { FacturasService } from 'src/app/services/facturas/facturas.service';

@Component({
  selector: 'app-actualizar',
  templateUrl: './actualizar.page.html',
  styleUrls: ['./actualizar.page.scss'],
})
export class ActualizarPage implements OnInit {

  isModalOpen = false;
  setOpen(isOpen: boolean) {this.isModalOpen = isOpen; }
  public idL!:String
  public facturaSub:Subscription=new Subscription()
  public categoriaSubscription= new Subscription()
  public categorias:Categoria[]=[];
  public productos:Productos[]=[];
  public reserva:Productos[]=[];
  public factura = new Facturas()
  public nuevo= new Productos()
  public id!:string
  public p!:number
  public nombre!:string
  constructor(
    private obtenerIdL:ActivatedRoute,
    private link:Router,
    public categoriaService: CategoriasService,
    public facturasService: FacturasService
  ) { }

  ngOnInit() {
    this.idL=this.obtenerIdL.snapshot.paramMap.get('id')!
    this.facturasService.GetUnaFactura(this.idL).then((data:Facturas)=>{
      this.factura=data
      this.reserva=data.Productosvendidos
    })

    //Agregar categorias a la factura
    this.categoriaSubscription=this.categoriaService.Categorias$().subscribe((data:Categoria[])=>{
      this.categorias=data;

    })
    this.categoriaService.Getcategorias().then()
  }
////// LO mismo para agregar o registrar
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
      console.log("Agregando"+this.factura.subtotal)
      this.nuevo= new Productos()
      }else{
        alert("ingresa la cantidad")
      }
    }

    pagar(){
      this.factura.Productosvendidos=this.reserva
      console.log(this.factura)
      this.facturasService.putfacturas(this.factura)
      this.link.navigate(['/tabs/facturas'])
     }

quitar(p:number){
      this.reserva.splice(p,1)
      this.factura.subtotal=0
      this.reserva.forEach(element => {
        this.factura.subtotal=this.factura.subtotal+(element.cant*element.valor)
      });
      this.factura.iva=0.19*this.factura.subtotal
      this.factura.total=this.factura.subtotal+this.factura.iva
      console.log("Eliminando:"+this.factura.subtotal)
     }
}
