import { TestBed } from '@angular/core/testing';

import { ColorProviderService } from './color-provider.service';

describe('ColorsProviderService', () => {
  let service: ColorProviderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ColorProviderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
