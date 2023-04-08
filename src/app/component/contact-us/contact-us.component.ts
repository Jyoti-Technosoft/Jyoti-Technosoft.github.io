import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

interface contactInfo {
  label: string;
  icon: string;
  descriptionDetails: string;
  routerlink: string;
}

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class ContactUsComponent implements OnInit {
  contactUsForm!: FormGroup;

  constructor(private fb: FormBuilder) {}

  contactInfo!: contactInfo[];
  socialMedia = [
    { label: 'facebook', icon: 'fa-facebook-square', routerlink: 'Home' },
    { label: 'twitter', icon: 'fa-twitter-square', routerlink: 'hireUs' },
    { label: 'instagram', icon: 'fa-instagram', routerlink: 'portfolio' },
    { label: 'linkedin', icon: 'fa-linkedin-square', routerlink: 'services' },
  ];

  ngOnInit(): void {
    this.initForm();

    this.contactInfo = [
      {
        label: 'contact no.',
        icon: 'call',
        descriptionDetails: '+91 98798 67255',
        routerlink: 'tel:+91 8469499488',
      },
      {
        label: 'mail',
        icon: 'mail',
        descriptionDetails: 'info@JyotiTechnosoft.com',
        routerlink: 'mailto:hr.webosmotic@gmail.com',
      },
      {
        label: 'Address',
        icon: 'location_on',
        descriptionDetails:
          "228, Second Floor, Green Elina, Nr. Sneh Sankul's Vadi, Anand Mahal Rd, Giriraj Society, Adajan, Surat 395009, Gujarat, India",
        routerlink: '',
      },
    ];
  }

  initForm() {
    this.contactUsForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: [''],
      emailAddress: ['', Validators.email],
      subject: ['', Validators.compose([Validators.required, Validators.maxLength(30)])],
      mobileNo: [
        '',
        Validators.compose([Validators.required,
          Validators.minLength(10),
          Validators.maxLength(13)])
      ],
      description: ['', [Validators.required, Validators.maxLength(250)]],
      recaptcha: ['', Validators.required],
    });
  }

  resolved(captchaResponse: string) {
    console.log(`Resolved captcha with response: ${captchaResponse}`);
  }
}
