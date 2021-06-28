import { Component, OnInit } from '@angular/core';
import { FAQ } from 'src/app/_models/FAQ.model';
import { ToastrService } from 'ngx-toastr';
import { baseUrl, environment } from 'src/environments/environment';
import { showNotification } from 'src/app/helpers/show-toast';
import { FAQService } from 'src/app/_services/faq.service';

@Component({
  selector: 'app-faq-list',
  templateUrl: './faq-list.component.html',
  styleUrls: ['./faq-list.component.scss']
})
export class FaqListComponent implements OnInit {
  FAQsArray: FAQ[] = [];
  dismissible = true;
  showAlertSuccess = false;
  successAlertMessage;
  loading = true;
  shimmerArray = Array(4);

  constructor(
    private faqServise: FAQService,
    public toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.faqServise.getAllFAQ().subscribe((res) => {
      // tslint:disable-next-line: no-unused-expression
      !environment.production && console.log(res);

      res?.data?.map((faq) => {
        this.FAQsArray.push(faq);
      });

      this.loading = false;
    });
  }

  onDeleteHandler(id): void {
    console.log(id);
    this.faqServise.deleteFAQ(id).subscribe((res) => {
      console.log(res);
      this.showAlertSuccess = true;
      showNotification(
        'success',
        `${res.data.question} has been deleted`,
        this.toastr
      );
      this.FAQsArray = this.FAQsArray.filter(
        (faq) => faq.id !== res.data.id
      );
    });
  }

}

