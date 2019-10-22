import { Component, OnInit } from '@angular/core';
import { User } from 'app/security/login/user.model';
import { LoginService } from 'app/security/login/login.service';

@Component({
  selector: 'mt-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})

export class UserDetailComponent implements OnInit {

  constructor(private loginService: LoginService) { }

  ngOnInit() {
  }

  user(): User {
    return this.loginService.user
  }

  isLoggedIn(): boolean {
    return this.loginService.isLoggedIn()
  }

  login(){
    this.loginService.handleLogin()
  }

  logout(){
    this.loginService.logout()
  }
}
