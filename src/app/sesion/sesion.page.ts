import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/users/user.service';
import { Router } from '@angular/router';
import { Preferences } from '@capacitor/preferences';

@Component({
  selector: 'app-sesion',
  templateUrl: './sesion.page.html',
  styleUrls: ['./sesion.page.scss'],
})
export class SesionPage implements OnInit {

  public email:string=""
  public password:string=""
  public token!:string

   constructor(
    public userService: UserService,
    private route:Router,
    ) { }

  ngOnInit() {
  }

ingresar(){
  if(this.email==="" || this.password===""){
    alert("Ingresa los valores")
  }else{
    this.userService.Login(this.email,this.password).then(async(data)=>{
      console.log(data.data)
      if(!data.data.token){
        alert("No encontrado")
      }else{
        await Preferences.set({
          key: 'token',
          value: data.data.token
        });
        this.Quien()
        alert("si")
      }
    })
  }
}

async Quien(){
  const { value } = await Preferences.get({ key: 'token' });
  if(value)
    this.userService.Quien(value).then((data)=>{ })
    this.route.navigate(['/tabs/facturas'])
  }
}
