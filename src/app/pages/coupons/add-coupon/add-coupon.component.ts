import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Coupons } from 'src/app/_models/coupons.model';
import { CouponsService } from 'src/app/_services/coupons.service';
import { ToastrService } from 'ngx-toastr';
import { showNotification } from 'src/app/helpers/show-toast';
import { environment } from 'src/environments/environment';
import {doctorSpecilaities} from 'src/app/_models/specialities.model'
import {DoctorSpecilaitiesService} from 'src/app/_services/doctor-specilaities.service'

@Component({
  selector: 'app-add-coupon',
  templateUrl: './add-coupon.component.html',
  styleUrls: ['./add-coupon.component.scss']
})
export class AddCouponComponent implements OnInit {

  
  // startDate = new Date();
  // endDate = new Date();
  editMode = false;
  coupon: Coupons = {};
  specialities: doctorSpecilaities[] = [];
  disabled = false;

  constructor(
    private adminCouponsService: CouponsService,
    private docsSpecialitiesService: DoctorSpecilaitiesService,
    private activatedRoute: ActivatedRoute,
    public toastr: ToastrService
  ) {
    // this.maxDate.setDate(this.maxDate.getDate() + 7);
  }

  ngOnInit(): void {
    this.editMode =
      this.activatedRoute.snapshot.url[1] &&
      this.activatedRoute.snapshot.url[1].path === 'edit' &&
      true;

    if (this.editMode) {
      this.disabled = true;
      const id = this.activatedRoute.snapshot.params.couponId;
      this.adminCouponsService.getCouponById(id).subscribe((res) => {
        this.coupon = res.data.adminCoupons[id-1];

        console.log(this.coupon);
        this.coupon.startDate = new Date(res.data.adminCoupons[id-1].startDate);
        this.coupon.endDate = new Date(res.data.adminCoupons[id-1].endDate);
      });
    }

    this.docsSpecialitiesService.getAllSpecialities().subscribe((res) => {
      res?.data?.doctorSpecilaities.map((spec) => {
        this.specialities.push(spec);
        // console.log(this.specialities);
      });
    });

  }

  // endDateChange(e){
  //   const today = new Date();
  //   const date = e.target.value;
  //   console.log(today);

  //   if(new Date(date) <= today ){
  //     this.coupon.endDate = new Date(today.setDate(today.getDate() + 1));
  //     console.log(this.coupon.endDate);
  //   }
  // }

  onDiscountChange(e) {
    const discount = e.target.value;
    if(this.coupon.discountPercentage > 0){
      this.coupon.amount = 0
    }
  }

  onAmountChange(e) {
    const amount = e.target.value;
    if(this.coupon.amount > 0){
      this.coupon.discountPercentage = 0
    }
  }

  // specialityChanged(value): void {

  //   const speciality = this.specialities.find((s) => s.id === +value);
  //   if (speciality) {
  //     this.specialities.id = speciality.id;
  //   }
  // }


  onAddNewCoupon(): void {

    if (this.editMode) {
      const today = new Date();

      if(new Date(this.coupon.endDate) <= today ){
        this.coupon.endDate = new Date(today.setDate(today.getDate() + 1));
      }

      this.adminCouponsService
        .updateCoupon(this.coupon)
        .subscribe((res) => {
          showNotification(
            'success',
            `${res.data.couponName} has been added`,
            this.toastr
          );
          console.log(res);
        });
    } else {
      this.adminCouponsService
        .addNewCoupon(this.coupon)
        .subscribe((res) => {
          showNotification(
            'success',
            `${res.data.couponName} has been added`,
            this.toastr
          );
          console.log(res);
        });
    }
  }

}


