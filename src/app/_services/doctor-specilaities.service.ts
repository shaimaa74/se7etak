import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {doctorSpecilaities} from 'src/app/_models/specialities.model'

@Injectable({
  providedIn: 'root'
})
export class DoctorSpecilaitiesService {

  baseUrl = 'https://149d40be-2cb3-410b-bf05-75d527e0ad3f.mock.pstmn.io/' ;

  specialitiesUrl = this.baseUrl + 'api/DoctorSpeciality';

  constructor(private http: HttpClient) {}

  getAllSpecialities(): Observable<any> {
    return this.http.get(`${this.specialitiesUrl}/GetAllSpecialities`);
  }
}
