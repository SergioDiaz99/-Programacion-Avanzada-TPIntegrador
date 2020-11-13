import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { AuthService } from 'src/app/auth/auth.service';
import { Router } from '@angular/router';
import { LoginCredentials } from 'src/app/Models/login/login-credentials';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm : FormGroup;

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
    this.loginForm = new FormGroup({
      'email': new FormControl(),
      'password': new FormControl()
    })
  }

  login(){
    let userCredentials = new LoginCredentials();
    userCredentials.email = this.loginForm.get('email').value;
    userCredentials.password = this.loginForm.get('password').value;

    this.authService.login(userCredentials).subscribe(
      response => {    
        if (this.authService.token) {
          let redirect = this.authService.redirectUrl 
          ? this.router.parseUrl(this.authService.redirectUrl) : '/products';
          
          this.router.navigateByUrl(redirect);
        }
      },
    error => {
      
    });
  }
}
