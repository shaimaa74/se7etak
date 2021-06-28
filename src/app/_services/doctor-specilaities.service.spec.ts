import { TestBed } from '@angular/core/testing';

import { DoctorSpecilaitiesService } from './doctor-specilaities.service';

describe('DoctorSpecilaitiesService', () => {
  let service: DoctorSpecilaitiesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DoctorSpecilaitiesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
