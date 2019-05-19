import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../data.service';
import { RestApiService } from '../rest-api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email = "";
  password = "";

  constructor(private router: Router, private data: DataService, private rest: RestApiService) { }

  ngOnInit() {
  }

  validate() {
    if(this.email) {
      if(this.password) {
        return true;      
      } else {
        this.data.error('Password is not entered!');
      }      
    } else {
      this.data.error('Email is not entered!');
    }
  }

  async login() {
    try {
      if(this.validate()) {
        const data = await this.rest.post(
          'http://localhost:3000/api/users/login',
          {
            email: this.email,
            password: this.password
          }
        );
        if(data['success']) {
          localStorage.setItem('token', data['token']);
          this.data.trigger();
          // get profile 
          this.router.navigateByUrl('/profile');
        } else {
          this.data.error(data['message']);
        }
      }
    } catch (error){
      this.data.error(error['message']);
    }
  }

}
