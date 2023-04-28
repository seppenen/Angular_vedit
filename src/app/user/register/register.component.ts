import { Component } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../../services/auth.service";
import {AuthError} from "firebase/auth";
import IUser from "../../models/user.model";


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  showAlert = false;
  alertMsg = 'Please wait! Account being crated...'
  alertColor = 'blue'
  isActive = true;

  constructor(private auth: AuthService) {

  }


  name = new FormControl('', [Validators.required, Validators.minLength(3)])
  email = new FormControl('', [Validators.required, Validators.email])
  age = new FormControl<number | null>(null, [Validators.required, Validators.minLength(2), Validators.pattern(/^[0-9]\d*$/)])
  password = new FormControl('', [Validators.required, Validators.pattern(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm)])
  passwordConfirmation = new FormControl('', [Validators.required])
  phone = new FormControl('', [Validators.required])


  registerForm = new FormGroup({
    name: this.name,
    email: this.email,
    age: this.age,
    password: this.password,
    phone: this.phone

})


  async submit() {
    this.showAlert = true;
    this.alertMsg = 'Please wait! Account being crated...'
    this.alertColor = 'blue'
    this.isActive = false;


    try {
     await this.auth.createUser(this.registerForm.value as IUser)
    }
    catch (e: any | AuthError) {
      this.alertMsg = 'Error creating account!'
      this.alertColor = 'red'
      this.isActive = true;
      return
    }
    this.alertMsg = 'Account created successfully!'
    this.alertColor = 'green'

  }
}
