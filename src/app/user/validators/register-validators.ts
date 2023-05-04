import {AbstractControl, ValidatorFn} from "@angular/forms";
import {ValidationErrors} from "@angular/forms";

export class RegisterValidators {


  static match(controlName: string, matchingControlName: string):ValidatorFn {
    return (form: AbstractControl): ValidationErrors | null => {
      const control = form.get(controlName)
      const matchingControl = form.get(matchingControlName)

      if(!control || !matchingControl){
        console.error('Control not found!')
        return {controlNotFound: false}
      }

      const error = control.value !== matchingControl.value ? {passwordsDontMatch: true} : null;
      matchingControl.setErrors(error)
      return error
    }
    }
}
