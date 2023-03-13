import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent implements OnInit {
  contactUsForm!: FormGroup;

  constructor(private fb: FormBuilder) {}

  contactInfo!: {label:string, icon:string}[];
  ngOnInit(): void {
      this.initForm();
      this.contactInfo = [
        { label: 'Address', icon: 'fa-map-marker'},
        { label: 'email', icon: 'fa-envelope'},
        { label: 'contact no.', icon: 'fa-phone'}
      ]
  }


  initForm() {
    this.contactUsForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: [''],
      emailAddress: ['', Validators.email],
      subject: ['', [Validators.required, Validators.maxLength(30)]],
      mobileNo: ['', Validators.required, Validators.minLength(10),Validators.maxLength(13)],
      description: ['', [Validators.required, Validators.maxLength(250)]],
      recaptcha: ['', Validators.required],
    })
  }

  resolved(captchaResponse: string) {
    console.log(`Resolved captcha with response: ${captchaResponse}`);
  }
}