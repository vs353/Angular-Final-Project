import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'typefilter',
  pure: true
})
export class TypefilterPipe implements PipeTransform {

  transform(products: any, type: string): any {
    if(!type || type == "All")
       return products;

    return products.filter((x:any)=>x.categoryId == type)
  }

}
