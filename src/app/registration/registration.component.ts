import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { formReg } from './formReg';

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

    this.registrationForm = formBuilder.group({
      fname: ["", [Validators.required, Validators.minLength(3)]],
      lname: ["", [Validators.required]],
      email: ["", [Validators.required]],
      password: ["", [Validators.required]],
      mobile: ["", [Validators.required]],
      address: ["", [Validators.required]],
      city: ["", [Validators.required]],
      zip: ["", [Validators.required]]

    });


    // //  Or we can also do like this both are same use to create a group of form controls
    // this.registrationForm = new FormGroup({
    //   fname: new FormControl("", [Validators.required]),
    //   lname: new FormControl("", [Validators.required]),
    //   email: new FormControl("", [Validators.required]),
    //   password: new FormControl("", [Validators.required]),
    //   mobile: new FormControl("", [Validators.required]),
    //   address: new FormControl("", [Validators.required]),
    //   city: new FormControl("", [Validators.required]),
    //   zip: new FormControl("", [Validators.required])

    // });

  }

  ngOnInit(): void {
    this.getRegValue();

    // // To get a single form control changed value at a time
    // this.registrationForm.get('fname')?.valueChanges.subscribe(
    //   uname => {
    //     console.log(uname,"fname")
    // })

    // // To get all form controls changed value at a time
    // this.registrationForm.valueChanges.subscribe(
    //   uname => {
    //     console.log(uname,"fname")
    // });

    // If we want get particular controls value of registration form need to specified
    //  the specific controls in a other class as property
    this.registrationForm.valueChanges.subscribe((fReg: formReg) => {
      console.log("fname", fReg.fname);
      console.log("name", fReg.mobile);
      console.log("name", fReg.email);
      console.log("p", fReg.password);
    })

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
    if (registrationForm.valid) {

      let regArray = [this.Fname, this.Lname, this.Email, this.Password, this.Mobile, this.Address, this.City, this.Zip];

      localStorage.setItem("regForm", JSON.stringify(regArray));
    }

  }
  getRegValue() {

    let getregVlaue = localStorage.getItem("regForm");
    console.log(typeof getregVlaue, "drefd");

    // getregVlaue.for
  }

  resetRegForm() {
    this.registrationForm.reset();
  }

  setOrEditFormValue() {

    // Here defference between setValue and patchValue is when we will remove any controls in setValue it will 
    // throw error even patchValue not throw any error and fill the all existing controls value that available

    // this.registrationForm.setValue({
    //   "fname": "Ravi",
    //   "lname": "Ravi",
    //   "email": "Ravi",
    //   "password": "Ravi",
    //   "mobile": 345,
    //   "address": "Ravi",
    //   "city": "Ravi",
    //   "zip": "Ravi"

    // });

    this.registrationForm.patchValue({
      "fname": "Ravi",
      "lname": "Ravi",
      "email": "Ravi",
      "password": "Ravi",
      "address": "Ravi",
      "city": "Ravi",
      "zip": "Ravi"

    });
  }

}
