import { Injectable } from '@angular/core';
import { CapacitorHttp, HttpResponse } from '@capacitor/core';
import { Preferences } from '@capacitor/preferences';
import { Observable, Subject } from 'rxjs';
import { Categoria } from 'src/app/modelos/categoria/categoria';

@Injectable({
  providedIn: 'root'
})
export class CategoriasService {
  public lb4="http://localhost:3000/"
  public categoriasObservable$= new Subject<Categoria[]>();
  public categorias:Categoria[]=[];
  public categoria= new Categoria()
  constructor() { }

  Categorias$():Observable<Categoria[]>{
    return this.categoriasObservable$.asObservable();
  }


Getcategorias = async () => {
  const { value } = await Preferences.get({ key: 'token' });
  const opt = {
    url: this.lb4+'categorias',
    headers: { "Content-Type": "application/json",
    "Authorization": 'Bearer ' + value
  }
  };
const respuesta: HttpResponse = await CapacitorHttp.get(opt);
this.categorias=[]
      respuesta.data.forEach((data:any)=> {
        this.categoria=new Categoria();
        this.categoria.setvalues(data)
        this.categorias.push(this.categoria)
      });
      this.categoriasObservable$.next(this.categorias)

}


PostCategorias = async (categoria:Categoria) => {
  const { value } = await Preferences.get({ key: 'token' });
  const opt = {
    url: this.lb4+'categorias',
    data: categoria,
    headers: { "Content-Type": "application/json",
    "Authorization": 'Bearer ' + value
  }
    };
  const respuesta: HttpResponse = await CapacitorHttp.post(opt);
  return respuesta.data.id
}


PutCategoria = async (categoria:Categoria) => {
  const { value } = await Preferences.get({ key: 'token' });
  let id=categoria.id
  const opt = {
    url: this.lb4+'categorias/'+id,
    data:categoria,
    headers: { "Content-Type": "application/json",
    "Authorization": 'Bearer ' + value
    }
    };
  const respuesta: HttpResponse = await CapacitorHttp.put(opt);
  return respuesta.data
}

}
