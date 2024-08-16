import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { Validators, FormBuilder, FormGroup, ValidatorFn, AbstractControl, FormControl,ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule, NgIf],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  form = new FormGroup({
    username: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required, Validators.minLength(4)]),
    confirmPassword: new FormControl('', [Validators.required])
  }, [this.matching("password", "confirmPassword")]);

  handleSubmit(){
    console.log(this.form.value);
    const formattedData = {
      username : this.username?.value,
      password : this.password?.value
    }
    localStorage.setItem("user", JSON.stringify(formattedData))
    window.location.replace("/secret")
  }

  get username() {
    return this.form.get('username');
  }

  get password() {
    return this.form.get('password');
  }
  get confirmPassword(){
    return this.form.get('confirmPassword')
  }

  matching(controlName: string, checkControlName: string): ValidatorFn {
    return (controls: AbstractControl) => {
        const control = controls.get(controlName);
        const checkControl = controls.get(checkControlName);
        if(control === null) return null;
        if(checkControl === null) return null;
        if (control.value !== checkControl.value) {
            checkControl.setErrors({ matching: true });
            return { matching: true };
        }
        return null;
    };
}
}
