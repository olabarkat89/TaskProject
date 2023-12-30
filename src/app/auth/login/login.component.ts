import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormGroupDirective, NgForm, Validators } from '@angular/forms';
// import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { ErrorStateMatcher } from '@angular/material/core';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})


export class LoginComponent implements OnInit {
  email!: string ;

  password!: string;
  isModalOpen: boolean = false;

  LoginForm: FormGroup=new FormGroup({
    // "OlaBarkat@gmail.com" , P@ssw0rd.123
     email: new FormControl('',[Validators.email,Validators.required]),
     password: new FormControl('',Validators.required),
  });;

  constructor(private authService : AuthService, private router : Router ) { }

  ngOnInit() {
    
  }

  openModal() {
    this.isModalOpen = true;
  }

  closeModal() {
    this.isModalOpen = false;
  }
  
  onClickSubmit(data: any) {
     this.email = data.email;
     this.password = data.password;

     console.log("Login page: " + this.email);
     console.log("Login page: " + this.password);

     this.authService.login(this.email, this.password)
        .subscribe( data => { 
           console.log("Is Login Success: " + data); 
          
          if(data){
           this.router.navigate(['home']); 
          }
          else{
            this.openModal()
          }

     });
  }
}

