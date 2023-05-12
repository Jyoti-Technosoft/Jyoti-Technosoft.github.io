import { Component,ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ModalComponent {
  contactUsForm!: FormGroup;
  isLoading = false;
  button = 'Submit';

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.initForm();
  }
  initForm() {
    this.contactUsForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: [''],
      emailAddress: ['', Validators.email],
      mobileNo: [
        '',
       [ Validators.required,
        Validators.minLength(10),
        Validators.maxLength(13),]
      ],
      currentSalary: ['',Validators.required],
      noticePeriod: ['',Validators.required],
      recaptcha: ['', Validators.required]
    });
    this.contactUsForm.valueChanges.subscribe((data)=>{
      console.log(data,this.contactUsForm);
    })
  }
  resolved(captchaResponse: any) {
    console.log(`Resolved captcha with response: ${captchaResponse}`);
  }

}
