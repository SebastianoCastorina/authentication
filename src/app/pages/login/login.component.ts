import { Component } from '@angular/core';
import { ILogin } from '../auth/interfaces/ilogin';
import { AuthService } from '../auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  formData: ILogin = {
    email: '',
    password: 'password',
  };
  constructor(private authSvc: AuthService, private router: Router) {}

  login() {
    this.authSvc.login(this.formData).subscribe((data) => {
      console.log(data);
      this.router.navigate(['/']);
    });
  }
}
