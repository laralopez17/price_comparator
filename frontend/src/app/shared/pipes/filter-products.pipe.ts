import { Pipe, PipeTransform } from '@angular/core';
import { IProduct } from '../../api/models/i-products';

@Pipe({
  name: 'filterProducts',
  standalone: true
})
export class FilterProductsPipe implements PipeTransform {
  transform(products: IProduct[], searchTerm: string): IProduct[] {
    if (!products || !searchTerm) {
      return products;
    }
    const lowerCaseTerm = searchTerm.toLowerCase();
    return products.filter(product =>
      product.productName.toLowerCase().includes(lowerCaseTerm)
    );
  }
}
