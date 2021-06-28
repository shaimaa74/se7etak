import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PaymentMethod } from 'src/app/_models/paymentMethods.model';
// import { MobileRoutes } from 'src/app/_models/routes.model';
import { PaymentMethodsService } from 'src/app/_services/payment-methods.service';
import { RoutesService } from 'src/app/_services/routes.service';
import { ToastrService } from 'ngx-toastr';
import { showNotification } from 'src/app/helpers/show-toast';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-add-payment-method',
  templateUrl: './add-payment-method.component.html',
  styleUrls: ['./add-payment-method.component.scss']
})
export class AddPaymentMethodComponent implements OnInit {

  editMode = false;

  paymentMethod: PaymentMethod = {};

  constructor(
    private paymentMethodService: PaymentMethodsService,
    private activatedRoute: ActivatedRoute,
    public toastr: ToastrService
  ) {
  }

  ngOnInit(): void {
    this.editMode =
      this.activatedRoute.snapshot.url[1] &&
      this.activatedRoute.snapshot.url[1].path === 'edit' &&
      true;

    if (this.editMode) {
      const id = this.activatedRoute.snapshot.params.methodId;
      console.log(id);
      this.paymentMethodService.getPaymentMethodById(id).subscribe((res) => {
        this.paymentMethod = res.data.PaymentMethods;
        
        console.log(res.data.PaymentMethods);
      });
    }
  }


  onAddPaymentMethod(): void {

    console.log(this.paymentMethod);
    if (this.editMode) {
      this.paymentMethodService
        .updatePaymentMethod(this.paymentMethod)
        .subscribe((res) => {
          showNotification(
            'success',
            `${res.data.Paymentmethod} has been added`,
            this.toastr
          );
          console.log(res);
        });
    } else {
      this.paymentMethodService
        .addNewPaymentMethod(this.paymentMethod)
        .subscribe((res) => {
          showNotification(
            'success',
            `${res.data.Paymentmethod} has been added`,
            this.toastr
          );
          console.log(res);
        });
    }
  }


}

