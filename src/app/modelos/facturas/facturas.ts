import { Productos } from "../productos/productos";

export class Facturas {
  public id!:string;
  public vendedor!:string
  public Productosvendidos:Productos[]=[];
  public fecha!: string;
  public subtotal!: number;
  public iva!: number;
  public total!: number;
  setdatos(element:any){
    this.id=element.id;
    this.vendedor=element.vendedor
    this.fecha=element.fecha;
    this.subtotal=element.subtotal;
    this.iva=element.iva;
    this.total=element.total;
    this.Productosvendidos=element.Productosvendidos
  }
}
