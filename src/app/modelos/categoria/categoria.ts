import { Productos } from "../productos/productos";

export class Categoria {
  public id?:string
  public nombreC!:String
  public categoriaProductos:Productos[]=[];
  setvalues(item:Categoria){
    this.id=item.id
    this.nombreC=item.nombreC
    this.categoriaProductos=item.categoriaProductos
  }
}
