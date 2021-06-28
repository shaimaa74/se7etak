import { Component, OnInit } from '@angular/core';
import { Coupons } from 'src/app/_models/coupons.model';
import { CouponsService } from 'src/app/_services/coupons.service';
import { environment, baseUrl } from 'src/environments/environment';
import { ToastrService } from 'ngx-toastr';
import { showNotification } from 'src/app/helpers/show-toast';


@Component({
  selector: 'app-coupons-list',
  templateUrl: './coupons-list.component.html',
  styleUrls: ['./coupons-list.component.scss']
})
export class CouponsListComponent implements OnInit {

  CouponsArray: Coupons[] = [];
  dismissible = true;
  loading = true;
  delete = false;
  constructor(
    private adminCouponsService: CouponsService,
    public toastr: ToastrService
  ) {}

  ngOnInit(): void {

    this.adminCouponsService.getAllCoupons().subscribe((res) => {
      // tslint:disable-next-line: no-unused-expression
      !environment.production && console.log(res);

      res?.data?.adminCoupons.map((coupon) => {
        // offer.picture = `${baseUrl}${offer.picture}`;
        this.CouponsArray.push(coupon);
        this.loading = false;
      });
    });
  }
  // onDeleteHandler(id): void {
  //   console.log(id);
  //   this.latestOffersService.deleteOffer(id).subscribe((res) => {
  //     console.log(res);
  //     this.showAlertSuccess = true;
  //     // this.successAlertMessage = `${res.data.name} has been deleted`;
  //     showNotification('success', `${res.data.name} has been deleted`, this.toastr);
  //     this.CouponsArray = this.CouponsArray.filter(
  //       (offer) => offer.id !== res.data.id
  //     );
  //   });
  // }

}

