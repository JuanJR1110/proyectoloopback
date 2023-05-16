import { Component } from '@angular/core';
import { InfiniteScrollCustomEvent } from '@ionic/angular';
import { Productos } from '../modelos/productos/productos';
import { Categoria } from '../modelos/categoria/categoria';
import { Subscription } from 'rxjs';
import { CategoriasService } from '../services/categorias/categorias.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  isModalOpen = false;
  public categoriaSubscription= new Subscription()
  public mostrar:boolean=false
  public categorias:Categoria[]=[];
  public productos:Productos[]=[];
  public producto!:Productos
  public nuevo= new Productos()
  public categoria= new Categoria()
  public id!:string
  setOpen(isOpen: boolean) {
    this.isModalOpen = isOpen;
  }
   items:any[]= [];

   constructor(
    public categoriaService: CategoriasService
    ) { }

  ngOnInit() {
    this.categoriaSubscription=this.categoriaService.Categorias$().subscribe((data:Categoria[])=>{
      this.categorias=data;
      console.log(this.categorias)
    })
    this.categoriaService.Getcategorias().then()
  }
obtenerId(id:string){
this.id=id
}

PostCategoria(){
 this.categoria.categoriaProductos.push(this.nuevo)
 this.categoriaService.PostCategorias(this.categoria)
 this.categoriaService.Getcategorias().then()
}

agregarProductos(){
  this.productos.push(this.nuevo)
  alert("Agregado")
  this.nuevo = new Productos()
  this.mostrar=true

}


ActualizarCategoria(){
  this.categorias.forEach(element => {
    if(element.id===this.id){
      this.productos.forEach(element2 => {
        element.categoriaProductos.push(element2)
      });
      this.categoriaService.PutCategoria(element)
     this.productos=[]
     this.id=""
    }
  });

}

//////////////////////

  onIonInfinite(ev:any) {
    setTimeout(() => {
      (ev as InfiniteScrollCustomEvent).target.complete();
    }, 500);
  }
}
