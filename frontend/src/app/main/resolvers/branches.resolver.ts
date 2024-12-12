import { ResolveFn } from '@angular/router';
import { IndecResourceService } from '../../api/resources/indec-resource.service';
import { inject } from '@angular/core';
import { IBranch } from '../../api/models/i-branch';

export const branchesResolver: ResolveFn<IBranch[]> = (route, state) => {
  const localityId = Number(route.paramMap.get('localityId'));
  return inject(IndecResourceService).getBranches(localityId);
};
