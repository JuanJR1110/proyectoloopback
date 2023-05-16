import { Component } from '@angular/core';
import { FacturasService } from '../services/facturas/facturas.service';
import { Subscription } from 'rxjs';
import { Facturas } from '../modelos/facturas/facturas';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  public facturasSubscription= new Subscription()
  public facturas:Facturas[]=[]
  constructor(
    public facturasService: FacturasService
    ) { }

  ngOnInit() {
    this.facturasSubscription=this.facturasService.GetFacturas$().subscribe((data:Facturas[])=>{
      this.facturas=data;
      console.log(this.facturas)

    })
    this.facturasService.Getfacturas().then()
}

ver(){

}

}
