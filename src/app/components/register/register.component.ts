import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormGroup, FormControl, Validators, FormControlOptions, FormBuilder } from '@angular/forms';
import { AuthService } from 'src/app/core/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export default class RegisterComponent {
  errorMsg!: string
  isLoading: boolean = false
  constructor(private _AuthService: AuthService, private _Router: Router , private _FormBuilder:FormBuilder) { }




  registerForm: FormGroup=this._FormBuilder.group({
    name:['',[Validators.required, Validators.maxLength(15), Validators.minLength(3)]],
    email:['',[Validators.required, Validators.email]],
    password:['',[Validators.required, Validators.pattern(/^[a-zA-Z0-9]{6,}$/)]],
    rePassword:[''],
    phone:['',[Validators.required, Validators.pattern(/^01[1250][0-9]{8}$/)]]
  },{ validators: [this.confirmPassword] } as FormControlOptions)

  // registerForm: FormGroup = new FormGroup({
  //   name: new FormControl('', [Validators.required, Validators.maxLength(15), Validators.minLength(3)]),
  //   email: new FormControl('', [Validators.required, Validators.email]),
  //   password: new FormControl('', [Validators.required, Validators.pattern(/^[a-zA-Z0-9]{6,}$/)]),
  //   rePassword: new FormControl(''),
  //   phone: new FormControl('', [Validators.required, Validators.pattern(/^01[1250][0-9]{8}$/)])
  // }, { validators: [this.confirmPassword] } as FormControlOptions)


  confirmPassword(group: FormGroup): void {
    const password = group.get('password');
    const rePassword = group.get('rePassword');
    if (rePassword?.value == '') {
      rePassword?.setErrors({ required: true })
    }
    else if (password?.value != rePassword?.value) {
      rePassword?.setErrors({ mismatch: true })
    }
  }
  handelForm(): void {
    console.log(this.registerForm.value);
    this.isLoading = true
    const userData = this.registerForm.value
    if (this.registerForm.valid === true) {
      this._AuthService.register(userData).subscribe({
        next: (response) => {
          console.log(response);
          if (response.message == 'success') {
            this.isLoading = false
            this._Router.navigate(['./login'])
          }
        },
        error: (err) => {
          console.log(err);
          this.isLoading = false
          this.errorMsg = err.error.message
        }
      })
    }
  }
}
