import { TestBed } from '@angular/core/testing';

import { GeneralManagerService } from './_service/general-manager.service';

describe('GeneralManagerService', () => {
  let service: GeneralManagerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GeneralManagerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
