import { Component, OnInit } from '@angular/core';
import { RestApiService } from '../rest-api.service';
import { DataService } from '../data.service';
import { Router } from '@angular/router'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  fullname = "";
  email = "";
  password = "";
  confirmpassword = "";
  phone = "";

  constructor(private router: Router, private data: DataService, private rest: RestApiService) {}

  ngOnInit() {
  }

  validate() {
    if (this.fullname) {
      if (this.email) {
        if (this.phone) {
            if (this.password) {
              if (this.confirmpassword) {
                if (this.password == this.confirmpassword) {
                  return true;
                } else {
                  this.data.error('Mật khẩu bạn nhập không khớp!');
                }
              } else {
                this.data.error('Nhập xác nhận mật khẩu!');
              }
            } else {
              this.data.error('Nhập mật khẩu của bạn!');
            }
        } else {
          this.data.error('Nhập số điện thoại của bạn!');
        }
      } else {
        this.data.error('Nhập email của bạn!');
      }
    } else {
      this.data.error('Nhập đầy đủ họ & tên!');
    }
  }

  async register() {
    try {
      if (this.validate()) {
        const data = await this.rest.post(
          'http://localhost:3030/api/accounts/signup', {
            fullname: this.fullname,
            email: this.email,
            password: this.password,
            phone: this.phone
          }
        );
        if (data['success']) {
          localStorage.setItem('token', data['token']);
          this.router.navigate(['login']).then(() => {
            this.data.success('Đăng ký thành công!');
          }).catch(error => this.data.error(error));
        } else {
          this.data.error(data['message']);
        }
      }
    } catch (error) {
      this.data.error(error['message']);
    }
  }

}
