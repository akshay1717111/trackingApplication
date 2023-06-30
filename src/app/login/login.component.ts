import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginDetails={
    email:"",
    password:""
  }
  login(){
    console.log(this.loginDetails);
  }
 }
 
