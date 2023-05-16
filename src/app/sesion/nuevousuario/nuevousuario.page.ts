import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/modelos/user/user';
import { UserService } from 'src/app/services/users/user.service';

@Component({
  selector: 'app-nuevousuario',
  templateUrl: './nuevousuario.page.html',
  styleUrls: ['./nuevousuario.page.scss'],
})
export class NuevousuarioPage implements OnInit {
   public user = new User()
  constructor(
    public userService: UserService,
    public link:Router
    ) { }

  ngOnInit() {

  }

nuevo(){
  this.userService.CreateFactura(this.user)
  this.link.navigate(['/sesion'])

}
}
