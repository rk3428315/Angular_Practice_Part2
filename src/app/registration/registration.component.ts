import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {

  registrationForm!: FormGroup;
  Fname!: string;
  Lname!: string;
  Email!: string;
  Password!: string;
  Mobile!: number;
  Address!: string;
  City!: string;
  Zip!: string;

  constructor(private formBuilder: FormBuilder) {

    this.registrationForm = new FormGroup({
      fname: new FormControl(""),
      lname: new FormControl(""),
      email: new FormControl(""),
      password: new FormControl(""),
      mobile: new FormControl(""),
      address: new FormControl(""),
      city: new FormControl(""),
      zip: new FormControl("")

    });
  }

  ngOnInit(): void {

  }

  onRegister(registrationForm: any) {

    this.Fname = registrationForm.controls.fname.value;
    this.Lname = registrationForm.controls.lname.value;
    this.Email = registrationForm.controls.email.value;
    this.Password = registrationForm.controls.password.value;
    this.Mobile = registrationForm.controls.mobile.value;
    this.Address = registrationForm.controls.address.value;
    this.City = registrationForm.controls.city.value;
    this.Zip = registrationForm.controls.zip.value;

    let regArray = [this.Fname, this.Lname, this.Email, this.Password, this.Mobile, this.Address, this.City, this.Zip]

    localStorage.setItem("regForm", JSON.stringify(regArray));
    let regForm = localStorage.getItem("regForm");
    console.log(this.Fname, "drefd");


  }



}
