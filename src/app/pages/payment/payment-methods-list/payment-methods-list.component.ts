import { Component, OnInit } from '@angular/core';
import { PaymentMethod } from 'src/app/_models/paymentMethods.model';
import { ToastrService } from 'ngx-toastr';
import { baseUrl, environment } from 'src/environments/environment';
import { showNotification } from 'src/app/helpers/show-toast';
import { PaymentMethodsService } from 'src/app/_services/payment-methods.service';
import { of } from 'rxjs';

@Component({
  selector: 'app-payment-methods-list',
  templateUrl: './payment-methods-list.component.html',
  styleUrls: ['./payment-methods-list.component.scss']
})
export class PaymentMethodsListComponent implements OnInit {

  PaymentMethodArray: PaymentMethod[] = [];

  dismissible = true;
  showAlertSuccess = false;
  successAlertMessage;
  loading = true;
  shimmerArray = Array(4);
  
  constructor(
    private PaymentService: PaymentMethodsService,
    public toastr: ToastrService
  ) {}

  ngOnInit(): void {

    this.getAll();

  }

  getAll() {
    this.PaymentService.getAllPaymentMethods().subscribe((res:any) => {
      console.log(res);
      this.PaymentMethodArray = res.data.PaymentMethods;
      console.log(this.PaymentMethodArray);
      this.loading = false;
    });
  }


  onDeleteHandler(id): void {
    console.log(id);
    this.PaymentService.deletePaymentMethod(id).subscribe((res) => {
      console.log(res);
      this.showAlertSuccess = true;
      showNotification(
        'success',
        `${res.data.name} has been deleted`,
        this.toastr
      );
      this.PaymentMethodArray = this.PaymentMethodArray.filter(
        (payment) => payment.id !== res.data.id
      );
    });
  }

}

