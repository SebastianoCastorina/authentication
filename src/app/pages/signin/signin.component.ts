import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { ISignin } from '../auth/interfaces/signin';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss'],
})
export class SigninComponent {
  formData: ISignin = {
    nome: '',
    cognome: '',
    email: '',
    password: 'password',
  };

  constructor(private authSvc: AuthService, private router: Router) {}

  register() {
    return this.authSvc.signin(this.formData).subscribe((res) => {
      console.log(res);
      this.router.navigate(['/']);
    });
  }
}
