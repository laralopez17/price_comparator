import { ActivatedRouteSnapshot, ResolveFn, RouterStateSnapshot } from '@angular/router';
import { IProduct } from '../../api/models/i-products';
import { IndecResourceService } from '../../api/resources/indec-resource.service';
import { inject } from '@angular/core';
import { ISelectedOptions } from '../models/i-selected-options';

export const productsResolver: ResolveFn<IProduct[]> = (route, state) => {

  const headingId = Number(route.queryParamMap.get('headingId'));
  const categoryId = Number(route.queryParamMap.get('categoryId'));
  const productTypeId = Number(route.queryParamMap.get('productTypeId'));
  
  const selectedOptions: ISelectedOptions = { 
    headingId, 
    categoryId: categoryId ?? null, 
    productTypeId: productTypeId ?? null 
  };
  return inject(IndecResourceService).getProducts(selectedOptions);
};
