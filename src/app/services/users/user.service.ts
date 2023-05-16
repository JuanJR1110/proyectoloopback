import { Injectable } from '@angular/core';
import { CapacitorHttp, HttpResponse } from '@capacitor/core';
import { User } from 'src/app/modelos/user/user';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  public lb4="http://localhost:3000/"
  public user= new User()
  constructor() { }

CreateFactura = async (user:User)=>{
    const options = {
      url: this.lb4+'signup',
      headers: { "Content-Type": "application/json" },
      data: user
      };
    const response: HttpResponse = await CapacitorHttp.post(options);
    return response.status
  };


 Login = async(email:string,password:string)=>{
    const options = {
      url: this.lb4+'users/login/',
      headers: { "Content-Type": "application/json" },
      data: {email:email,password:password}
    };

  const response: HttpResponse = await CapacitorHttp.post(options);
   return response
  }

Quien = async(token:string)=>{
    const options = {
      url: this.lb4+'whoAmI',
      headers: { "Content-Type": "application/json",
                  "Authorization": 'Bearer ' + token
               }
    };

  const response: HttpResponse = await CapacitorHttp.get(options);
       return response
  }

}
