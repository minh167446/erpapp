import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../data.service';
import { RestApiService } from '../rest-api.service';

@Component({
  selector: 'app-employeelogin',
  templateUrl: './employeelogin.component.html',
  styleUrls: ['./employeelogin.component.css']
})
export class EmployeeloginComponent implements OnInit {

  constructor(private router: Router, private data: DataService, private rest: RestApiService) { }
  
  email = "";
  
  password = "";

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

   login() {
    console.log(125);
    try {
      if(this.validate()) {
        const data = this.rest.post(
          'http://localhost:3000/api/employees/login',
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
