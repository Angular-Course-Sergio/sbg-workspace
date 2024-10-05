import { TestBed } from '@angular/core/testing';

import { SbgSideMenuService } from './sbg-side-menu.service';

describe('SbgSideMenuService', () => {
  let service: SbgSideMenuService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SbgSideMenuService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
