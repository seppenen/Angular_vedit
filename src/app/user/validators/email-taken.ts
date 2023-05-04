import {AngularFireAuth} from "@angular/fire/compat/auth";
import { Injectable} from "@angular/core";
import {AbstractControl, AsyncValidator, ValidationErrors} from "@angular/forms";

@Injectable({
  providedIn: 'root'
  }
)
export class EmailTaken implements AsyncValidator{

  constructor(private auth: AngularFireAuth) {
  }


   async validate(control: AbstractControl): Promise<ValidationErrors | null> {
    const email = control.value as string;
    const user = await this.auth.fetchSignInMethodsForEmail(email);
    if (user.length > 0) {
      return {emailTaken: true}
    }
    return null;
  }
}
