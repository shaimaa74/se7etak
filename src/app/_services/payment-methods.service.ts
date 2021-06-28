import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { map , retry, catchError} from 'rxjs/operators';

import { PaymentMethod } from '../_models/paymentMethods.model';

@Injectable({
  providedIn: 'root'
})
export class PaymentMethodsService {
  baseUrl = 'https://149d40be-2cb3-410b-bf05-75d527e0ad3f.mock.pstmn.io/' ;

  paymentMethodsUrl = this.baseUrl + 'api/PaymentMethod';

  constructor(private http: HttpClient) {}

// getAllPaymentMethods() :Observable<any>{
//   return this.http.get(`${this.paymentMethodsUrl}/GetAllMethods`)
//                   .pipe(map((data: PaymentMethod[]) => { return data;}),
//                   catchError( error => { return error;}))
// }

  getAllPaymentMethods():Observable<any> {
    return this.http.get(`${this.paymentMethodsUrl}/GetAllMethods`);
  }

  getPaymentMethodById(id: number): Observable<any>{
    return this.http.get(`${this.paymentMethodsUrl}/GetAllMethods/${id}`);
  }

  addNewPaymentMethod(payload: PaymentMethod): Observable<any> {
    const formData = new FormData();
    formData.append('Paymentmethod', payload.Paymentmethod);
    formData.append('Fixedcommission', payload.Fixedcommission.toString());
    formData.append('Commissionratio', payload.Commissionratio.toString());

    return this.http.post(`${this.paymentMethodsUrl}/AddnewPaymentMethod`, formData);
  }

  deletePaymentMethod(id: number): Observable<any> {
    return this.http.delete(`${this.paymentMethodsUrl}/deletePaymentMethod/${id}`);
  }

  updatePaymentMethod(payload: PaymentMethod): Observable<any> {
    const formData = new FormData();
    formData.append('Paymentmethod', payload.Paymentmethod);
    formData.append('Fixedcommission', payload.Fixedcommission.toString());
    formData.append('Commissionratio', payload.Commissionratio.toString());

    return this.http.put(this.paymentMethodsUrl, formData);
  }

}
