import { TestBed } from '@angular/core/testing';

import { IndecResourceService } from './indec-resource.service';

describe('IndecResourceService', () => {
  let service: IndecResourceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IndecResourceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
