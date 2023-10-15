import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ForgetpassService } from 'src/app/core/services/forgetpass.service';
import {  Router } from '@angular/router';

@Component({
  selector: 'app-forget-password',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.scss']
})
export class ForgetPasswordComponent {
  constructor(private _ForgetpassService:ForgetpassService, private _Router:Router){}
email!:string
step1:boolean=true
step2:boolean=false
step3:boolean=false
userMsg:string=''
Code!:object
newPassword!:object

forgetPassword:FormGroup=new FormGroup({
  email:new FormControl('')
})

resetCode:FormGroup=new FormGroup({
  resetCode:new FormControl('')
})

resetPassword:FormGroup=new FormGroup({
  // email:this.forgetPassword.get('email')?.value,
  newPassword:new FormControl('')
})

forgetUserPassword():void{
  let Uemail=this.forgetPassword.value
  this.email=Uemail.email
  this._ForgetpassService.forgetPassword(Uemail).subscribe({
    next:(response)=>{
      console.log(response);
      this.userMsg=response.message
      this.step1=false
      this.step2=true
      
    },
    error:(err)=>{
      this.userMsg=err.error.message
    }
  })
}
resetTheCode():void{
  let Code=this.resetCode.value
  this._ForgetpassService.resetCode(Code).subscribe({
    next:(response)=>{
      this.userMsg=response.status
     
      this.step2=false;
      this.step3=true;
     
      console.log(response);
    },
    error:(err)=>{
      this.userMsg=err.error.status
      
    }
  })
}
resetUserPassword():void{
  let newPassword=this.resetPassword.value
  newPassword.email=this.email
  this._ForgetpassService.resetPassword(newPassword).subscribe({
    next:(response)=>{
      if(response.token){
        localStorage.setItem('etoken',response.token);
        this._Router.navigate(['/home'])
      }
      
      console.log(response);
      
    }
  })
}

}
