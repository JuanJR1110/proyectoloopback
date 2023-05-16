import { Injectable } from '@angular/core';
import { CapacitorHttp, HttpResponse } from '@capacitor/core';
import { Preferences } from '@capacitor/preferences';
import { Observable, Subject } from 'rxjs';
import { Facturas } from 'src/app/modelos/facturas/facturas';

@Injectable({
  providedIn: 'root'
})
export class FacturasService {
  public facturas:Facturas[]=[];
  public factura= new Facturas()
  public facturasObservable$= new Subject<Facturas[]>();

  public lb4="http://localhost:3000/"
  constructor() { }

  GetFacturas$():Observable<Facturas[]>{
    return this.facturasObservable$.asObservable();
  }


  public factura$= new Subject <Facturas>();
GetUna():Observable<Facturas>{
    return this.factura$.asObservable();
  }

  // Example of a GET request
Getfacturas = async () => {
  const { value } = await Preferences.get({ key: 'token' });
  const opt = {
    url:this.lb4+'facturas',
    headers: { 'X-Fake-Header': 'Fake-Value',
    "Authorization": 'Bearer ' + value
  }
  };
  const respuesta: HttpResponse = await CapacitorHttp.get(opt);
  respuesta.data.forEach((data:any)=> {
    this.factura = new Facturas();
    this.factura['setdatos'](data)
    this.facturas.push(this.factura)
  });
  this.facturasObservable$.next(this.facturas)
    // or...
  // const response = await CapacitorHttp.request({ ...options, method: 'GET' })
};

GetUnaFactura = async(id:String)=>{
  const { value } = await Preferences.get({ key: 'token' });
  const options = {
    url: this.lb4+'/facturas/'+id,
    headers: { "Content-Type": "application/json",
    "Authorization": 'Bearer ' + value
    }
  };

const respuesta: HttpResponse = await CapacitorHttp.get(options);
      return respuesta.data
}

Postfacturas = async (nueva:Facturas) =>{
  const { value } = await Preferences.get({ key: 'token' });
    const opt = {
      url: this.lb4+'/facturas',
      data: nueva,
      headers: { "Content-Type": "application/json",
      "Authorization": 'Bearer ' + value
      }
      };
    const respuesta: HttpResponse = await CapacitorHttp.post(opt);
          return respuesta.data
   };




putfacturas = async (actualizar:Facturas) =>{
  const { value } = await Preferences.get({ key: 'token' });
  let id=actualizar.id
    const opt = {
      url: this.lb4+'facturas/'+id,
      data:actualizar,
      headers: { "Content-Type": "application/json",
      "Authorization": 'Bearer ' + value
      }
      };
    const respuesta: HttpResponse = await CapacitorHttp.put(opt);
    return respuesta.data
   };

/*

 Deletefacturas = async (_id:String) =>{
    const opt = {
      url: this.lb4+'/facturas'+_id,
      headers: { "Content-Type": "application/json",
      }
      };
    const respuesta: HttpResponse = await CapacitorHttp.post(opt);
    return respuesta.data
   };*/



}
