import { Component } from '@angular/core';
import { ListaService } from './services/lista.service';

/**
 * creo un arreglo para guardar los datos que me llegan por el resp.
 * aca se usa el metodo implementado para traer los datos del api rest
 */

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'client';
  filterdata : any = '';

  public datos:Array<any>= []
  public page: number = 1;

  constructor(
    private listaservice: ListaService
    )

    {this.listaservice.getDatos().subscribe((resp : any) => { 
      this.datos = (resp.data)
    })
    
    }
}
