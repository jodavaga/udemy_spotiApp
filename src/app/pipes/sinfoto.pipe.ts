import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sinfoto'
})
export class SinfotoPipe implements PipeTransform {

  transform(value: any, pos?:number): any {
    
    let noImage:string = "assets/img/noimage.png";

    return ( value.length > 0 ) ? value[pos].url : noImage;
  }

}
