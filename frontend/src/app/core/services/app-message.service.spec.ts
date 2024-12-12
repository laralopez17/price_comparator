import { TestBed } from '@angular/core/testing';

import { AppMessageService } from './app-message.service';

describe('AppMessageService', () => {
  let service: AppMessageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AppMessageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
