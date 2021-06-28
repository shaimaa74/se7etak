import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
// import { baseUrl } from 'src/environments/environment';
import { FAQ } from '../_models/FAQ.model';

@Injectable({
  providedIn: 'root'
})
export class FAQService {

  baseUrl = 'https://149d40be-2cb3-410b-bf05-75d527e0ad3f.mock.pstmn.io/' ;

  faqUrl = this.baseUrl + 'api/AdminFAQs';

  constructor(private http: HttpClient) {}

  getAllFAQ(): Observable<any> {
    return this.http.get(this.faqUrl);
  }

  getFAQById(id: number): Observable<any>{
    return this.http.get(`${this.faqUrl}/${id}`);
  }

  addNewFAQ(payload: FAQ): Observable<any> {
    const formData = new FormData();

    formData.append('englishQuestion', payload.englishQuestion);
    formData.append('englishAnswer', payload.englishAnswer);
    formData.append('question', payload.question);
    formData.append('answer', payload.answer);
    formData.append('type', payload.type);
    formData.append('rank', payload.rank.toString());

    return this.http.post(this.faqUrl, formData);
  }

  deleteFAQ(id: number): Observable<any> {
    return this.http.delete(`${this.faqUrl}/${id}`);
  }

  updateFAQ(payload: FAQ): Observable<any> {
    const formData = new FormData();

    formData.append('englishQuestion', payload.englishQuestion);
    formData.append('englishAnswer', payload.englishAnswer);
    formData.append('question', payload.question);
    formData.append('answer', payload.answer);
    formData.append('type', payload.type);
    formData.append('rank', payload.rank.toString());

    return this.http.put(this.faqUrl, formData);
  }


}



