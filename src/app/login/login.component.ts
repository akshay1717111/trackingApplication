import { Component,EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  
@Input() sendLoginvalue=new EventEmitter<boolean>();
constructor(private router: Router){}
 loginDetails={
  email:'',
  password:''
}


  login(){
    if (this.loginDetails.email === 'a@a.com' &&
    this.loginDetails.password === '12345') {
     this.router.navigate(['/tracking'])
     
     
  } else {
    
   alert('InValid details!!!')
  }

  }
  
  
}
