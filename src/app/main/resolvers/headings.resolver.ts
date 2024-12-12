import { ResolveFn } from '@angular/router';
import { inject } from '@angular/core';
import { IndecResourceService } from '../../api/resources/indec-resource.service';
import { IHeading } from '../../api/models/i-heading';

export const headingsResolver: ResolveFn<IHeading[]> = (route, state) => {
  return inject(IndecResourceService).getCaterogies();
};
