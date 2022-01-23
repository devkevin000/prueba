import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  /**
   * metodo para hacer el buscador, el cual funciona para buscar por idMov, y buscar tambien por detalle
   * @param value 
   * @param arg 
   * @returns 
   */
  transform(value: any, arg: any): any {
    const resultdata = [];

    for (const data of value) { 
      if (data.detalle.toLowerCase().indexOf(arg.toLowerCase()) > -1) {
        resultdata.push(data);
      }

      if (String(data.idMov).indexOf(arg.toLowerCase()) > -1) {
        resultdata.push(data);
      }

    };

    return resultdata;
  }

}
