import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormControlName, FormGroup, ValidatorFn, Validators } from '@angular/forms';
import { IUser } from './IUser';
function ageRangeValidator(min:number, max: number) : ValidatorFn
{
  return (control:AbstractControl):{[key:string] : boolean} | null =>
  {
    if(control.value!== undefined && (isNaN(control.value) || control.value < min || control.value > max))
    {
      return{'ageRange' : true};
    }
    return null;
  };
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

title ='didemo';
loginForm : FormGroup;
min  = 30;
max = 70;
user :IUser = {
email :"Gaurav.Singh@taazaa.com",
password :"786512"
};
 // constructor() { }

  ngOnInit(): void  {
    this.loginForm = new FormGroup ( {
      email : new FormControl(this.user.email,[Validators.required]),
      password : new FormControl(this.user.password,[Validators.required, Validators.minLength(5)]),
      age : new FormControl( null,[ageRangeValidator(this.min,this.max)]),
      phonenumber : new FormControl(null,[]),
      notification : new FormControl('email',[])
    });
    this.fornControlValueChanged();
  }
login()
{
  console.log(this.loginForm.value);
  console.log(this.user);
}
cancel() {
this.loginForm.reset();
}

fornControlValueChanged() {
  const phoneControl = this.loginForm?.get('phonenumber');
  this.loginForm.get('notification')?.valueChanges.subscribe((data:string)=> {
    console.log(data);
    if(data === 'phone') {
      phoneControl?.setValidators([Validators.required])
    }
    else if(data === 'email')
    {
      phoneControl?.clearValidators();
    }
    phoneControl?.updateValueAndValidity();
  })
}



}
