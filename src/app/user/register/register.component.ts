import { Component } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  name = new FormControl('', [Validators.required, Validators.minLength(3)])
  email = new FormControl('', [Validators.required, Validators.email])
  age = new FormControl('', [Validators.required, Validators.minLength(2), Validators.pattern(/^[0-9]\d*$/)])
  password = new FormControl('', [Validators.required, Validators.pattern(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm)])
  passwordConfirmation = new FormControl('', [Validators.required])
  phone = new FormControl('', [Validators.required])


  registerForm = new FormGroup({
    name: this.name,
    email: this.email,
    age: this.age,
    password: this.password,
    passwordConfirmation: this.passwordConfirmation,
    phone: this.phone

})

  constructor() {

  }

  submit() {
    console.log(this.registerForm.invalid)
  }
}
