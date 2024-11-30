import { TestBed } from '@angular/core/testing';

import { RandomUserImgService } from './random-user-img.service';

describe('RandomUserImgService', () => {
  let service: RandomUserImgService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RandomUserImgService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
