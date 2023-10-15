import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormGroup, FormControl, Validators, FormControlOptions, FormBuilder } from '@angular/forms';
import { AuthService } from 'src/app/core/services/auth.service';
import { Router, RouterLink } from '@angular/router';
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule,RouterLink],

  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  errorMsg!: string
  isLoading: boolean = false
  constructor(private _AuthService: AuthService, private _Router: Router , private _FormBuilder:FormBuilder) { }




  loginForm: FormGroup=this._FormBuilder.group({
   
    email:['',[Validators.required, Validators.email]],
    password:['',[Validators.required, Validators.pattern(/^[a-zA-Z0-9]{6,}$/)]],
    
  })

  // loginForm: FormGroup = new FormGroup({
  //   email: new FormControl('', [Validators.required, Validators.email]),
  //   password: new FormControl('', [Validators.required, Validators.pattern(/^[a-zA-Z0-9]{6,}$/)]),
  // })


  
  handelForm(): void {
    console.log(this.loginForm.value);
    this.isLoading = true
    const userData = this.loginForm.value
    if (this.loginForm.valid === true) {
      this._AuthService.login(userData).subscribe({
        next: (response) => {
          console.log(response);
          if (response.message == 'success') {
            this.isLoading = false
            localStorage.setItem('etoken',response.token)
            this._AuthService.decodeUser();
            this._Router.navigate(['./home'])
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
