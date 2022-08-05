import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder,
  AbstractControl,
} from '@angular/forms';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  registerForm!: FormGroup;
  // registerForm = new FormGroup({
  //   firstName: new FormControl(null, [Validators.required]),
  //   lastName: new FormControl(null, [Validators.required]),
  //   email: new FormControl(null, [Validators.required, Validators.email]),
  //   password: new FormControl(null, [
  //     Validators.required,
  //     Validators.minLength(8),
  //   ]),
  //   repassword: new FormControl(null, [
  //     Validators.required,
  //     Validators.minLength(8),
  //   ]),
  //   address: new FormControl(null, [Validators.required]),
  // });
  constructor(private formBuilder: FormBuilder) {}
  ngOnInit(): void {
    this.registerForm = this.formBuilder.group(
      {
        firstName: ['', [Validators.required]],
        lastName: ['', [Validators.required]],
        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required, Validators.minLength(8)]],
        repassword: ['', [Validators.required, Validators.minLength(8)]],
        address: ['', [Validators.required]],
      },
      {
        validators: this.matchingPasswords('password', 'repassword'),
      }
    );
  }
  matchingPasswords(Password: string, ConfirmPassword: string) {
    return (controls: AbstractControl) => {
      if (controls) {
        const Password = controls.get('password')!.value;
        const ConfirmPassword = controls.get('repassword')!.value;
        //console.log ("check what is passed to the validator", password, confirmPassword);
        if (Password !== ConfirmPassword) {
          //this is an error set for a specific control which you can use in a mat-error
          controls.get('repassword')?.setErrors({ not_the_same: true });
          //this is the returned error for the form normally used to disable a submit button
          return { mismatchedPassword: true };
        }
      }
      return null;
    };
  }
}
