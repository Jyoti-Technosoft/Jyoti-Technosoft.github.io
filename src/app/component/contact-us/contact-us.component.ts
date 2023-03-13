import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent implements OnInit {
  contactUsForm!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
      this.inItForm();
  }


  inItForm() {
    this.contactUsForm = this.fb.group({
      firstName: [''],
      lastName: [''],
      emailAddress: [''],
      subject: [''],
      mobileNo: [''],
      description: [''],
    })
  }
}