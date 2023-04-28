import {Component} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../../services/auth.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  showAlert = false;
  alertMsg: string = 'Please wait! Account being logged in...'
  alertColor = 'blue'
  isActive = true;

  constructor(private authService: AuthService) {
  }

  email = new FormControl('', [Validators.required, Validators.email])
  password = new FormControl('', [Validators.required])

  loginForm = new FormGroup({
    email: this.email,
    password: this.password
  })



  async submit() {
    this.isActive = false;
    this.showAlert = true;
    const {email, password} = this.loginForm.value
    try {
      await this.authService.login(email as string, password as string)
    } catch (e) {
      console.log(e)
      this.alertMsg = (e as Error).message.replace('Firebase: ', '')
      this.alertColor = 'red'
      this.isActive = true
      return
    }
    this.alertColor = 'green'
    this.alertMsg = 'Logged in successfully!'
  }

}
