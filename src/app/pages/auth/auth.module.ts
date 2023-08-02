import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { AuthComponent } from './auth.component';
import { FormsModule } from '@angular/forms';
import { SigninComponent } from '../signin/signin.component';
import { LoginComponent } from '../login/login.component';

@NgModule({
  declarations: [AuthComponent, SigninComponent, LoginComponent],
  imports: [CommonModule, AuthRoutingModule, FormsModule],
})
export class AuthModule {}
