import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddLatestOfferComponent } from './pages/offers/add-latest-offer/add-latest-offer.component';
import { LatestOffersComponent } from './pages/offers/latest-offers/latest-offers.component';
import { AddLatestServiceComponent } from './pages/services/add-latest-service/add-latest-service.component';
import { LatestServicesListComponent } from './pages/services/latest-services-list/latest-services-list.component';
import { AddTestComponent } from './pages/tests/add-test/add-test.component';
import { TestsListComponent } from './pages/tests/tests-list/tests-list.component';

import {PaymentMethodsListComponent} from './pages/payment/payment-methods-list/payment-methods-list.component';
import {AddPaymentMethodComponent} from './pages/payment/add-payment-method/add-payment-method.component';

import {CouponsListComponent} from './pages/coupons/coupons-list/coupons-list.component';
import {AddCouponComponent} from './pages/coupons/add-coupon/add-coupon.component';

import {FaqListComponent} from './pages/FAQ/faq-list/faq-list.component';

//paymentMethods

const routes: Routes = [
  { path: 'offers', component: LatestOffersComponent},
  { path: 'offers/add', component: AddLatestOfferComponent},
  { path: 'offers/edit/:offerId', component: AddLatestOfferComponent},
  { path: 'services', component: LatestServicesListComponent},
  { path: 'services/add', component: AddLatestServiceComponent},
  { path: 'services/edit/:serviceId', component: AddLatestServiceComponent},

  { path: 'paymentMethods', component: PaymentMethodsListComponent},
  { path: 'paymentMethods/add', component: AddPaymentMethodComponent},
  { path: 'paymentMethods/edit/:methodId', component: AddPaymentMethodComponent},

  { path: 'coupons', component: CouponsListComponent},
  { path: 'coupons/add', component: AddCouponComponent},
  { path: 'coupons/edit/:couponId', component: AddCouponComponent},

  { path: 'FAQs', component: FaqListComponent},

  { path: 'tests', component: TestsListComponent},
  { path: 'tests/add', component: AddTestComponent},
  { path: 'tests/edit/:testId', component: AddTestComponent},
  { path: 'geo', component: TestsListComponent, children: [
  { path: 'cities', component: TestsListComponent},
  ]},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
