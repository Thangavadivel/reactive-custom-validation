import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators} from '@angular/forms';
import {zipcodeValidator, passValidator, emailDomainValidator, alphaNumericValidator , mobileNoValidator} from './validator';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  form: FormGroup;
  constructor(private fb: FormBuilder){
    this.form  = this.fb.group({
      username: ['', [Validators.required]],
      password: '',
      cnfpass: ['', passValidator],
      zip: ['', zipcodeValidator],
      email: ['', emailDomainValidator],
      alnum: ['', alphaNumericValidator],
      mobileNo: ['', mobileNoValidator]
    });


    this.form.controls.password.valueChanges
    .subscribe(
      x => this.form.controls.cnfpass.updateValueAndValidity()
    )
  }


  onSubmit(){
    // console.log(this.form.controls.zip);
    this.form.markAsTouched();
  }
}
