import { TestBed, inject } from '@angular/core/testing';

import { UpLoadService } from './up-load.service';

describe('UpLoadService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UpLoadService]
    });
  });

  it('should be created', inject([UpLoadService], (service: UpLoadService) => {
    expect(service).toBeTruthy();
  }));
});
