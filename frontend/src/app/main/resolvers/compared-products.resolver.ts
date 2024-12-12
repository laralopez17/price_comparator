import { inject } from '@angular/core';
import { ResolveFn } from '@angular/router';
import { IndecResourceService } from '../../api/resources/indec-resource.service';
import { IFinalCompared } from '../../api/models/i-final-compared';

export const comparedProductsResolver: ResolveFn<IFinalCompared[]> = (route, state) => {
  const localityId = Number(route.paramMap.get('localityId'));
  const barcodes = route.paramMap.get('barcodes')?.split(',') || [];

  return inject(IndecResourceService).getComparedProducts(localityId, barcodes);
};
