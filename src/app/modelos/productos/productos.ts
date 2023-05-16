export class Productos {
  public detalle!: string;
  public valor!: number;
  public cant!:number;
setValues(element:Productos){
  this.detalle=element.detalle;
  this.valor=element.valor;
  this.cant=element.cant;
}
}
