import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
// import { baseUrl } from 'src/environments/environment';
import { Coupons } from '../_models/coupons.model';

@Injectable({
  providedIn: 'root'
})
export class CouponsService {

  baseUrl = 'https://149d40be-2cb3-410b-bf05-75d527e0ad3f.mock.pstmn.io/' ;

  couponsUrl = this.baseUrl + 'api/AdminCoupons';

  constructor(private http: HttpClient) {}

  getAllCoupons(): Observable<any> {
    return this.http.get(this.couponsUrl);
  }

  getCouponById(id: number): Observable<any>{
    return this.http.get(`${this.couponsUrl}/${id}`);
  }

  addNewCoupon(payload: Coupons): Observable<any> {
    const formData = new FormData();

    formData.append('couponName', payload.couponName);
    formData.append('couponCode', payload.couponCode);
    formData.append('startDate', payload.startDate.toDateString());
    formData.append('endDate', payload.endDate.toDateString());
    formData.append('discountPercentage', payload.discountPercentage.toString());
    formData.append('amount', payload.amount.toString());
    formData.append('couponClass', payload.couponClass);
    formData.append('couponType', payload.couponType);
    formData.append('couponNameType', payload.couponNameType);

    return this.http.post(this.couponsUrl, formData);
  }

  // deleteCoupon(id: number): Observable<any> {
  //   return this.http.delete(`${this.couponsUrl}/${id}`);
  // }

  updateCoupon(payload: Coupons): Observable<any> {
    const formData = new FormData();

    formData.append('couponName', payload.couponName);
    formData.append('couponCode', payload.couponCode);
    formData.append('startDate', payload.startDate.toDateString());
    formData.append('endDate', payload.endDate.toDateString());
    formData.append('discountPercentage', payload.discountPercentage.toString());
    formData.append('amount', payload.amount.toString());
    formData.append('couponClass', payload.couponClass);
    formData.append('couponType', payload.couponType);
    formData.append('couponNameType', payload.couponNameType);

    return this.http.put(this.couponsUrl, formData);
  }

}

  

  


