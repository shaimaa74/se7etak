export interface Coupons {
    id?: number;
    couponName?: string;
    couponCode?: string;
    discountPercentage?: number;
    amount?: number;
    startDate?: Date;
    endDate?: Date;
    couponType?: string;
    couponNameType?: string;
    couponClass?: string;
  }