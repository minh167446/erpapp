import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { DataService } from '../data.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-postemployee',
  templateUrl: './postemployee.component.html',
  styleUrls: ['./postemployee.component.css']
})

export class PostemployeeComponent implements OnInit {
 
  departments: any;
  
  // listOfJobType = [{name: 'Nhân viên chính thức', id:'1'},{name: 'Thử việc ', id:'2'}, {name: 'Nhân viên thời vụ', id:'3'}];

  cancel() {
    this.location.back();
  }

  constructor(private location: Location,private http: HttpClient ,private activatedRoute: ActivatedRoute, private data: DataService, private router: Router) { }

  getHeaders() {
    const token = localStorage.getItem('token');
    return token ? new HttpHeaders()
                                    .set('Authorization', `Bearer ${token}`) : null;
  }

  ngOnInit() {
    try {
      let options = { headers: this.getHeaders() };
    this.activatedRoute.params.subscribe(res => {
      this.http.get(`http://localhost:3000/api/departments`, options)
            .subscribe(
              res=>this.departments = res
            )
    });
  } catch (error) {
    this.data.error(error['message']);
  }
  }

  // selected(event: MatSelectChange) {
  //   const selectedData = {
  //       text: (event.source.selected as MatOption).viewValue,
  //       value: event.source.value
  //   }
  //   console.log(selectedData);
  // }

  employeeForm = new FormGroup({
    fullname: new FormControl('', [
      Validators.required
    ]),
    email: new FormControl('', [
      Validators.required
    ]),
    phone: new FormControl('', [
      Validators.required,
    ]),
    jobType: new FormControl('', [
      Validators.required,
    ]),
    departments: new FormControl('', [
      Validators.required,
    ])
  });

  postHeaders() {
    const token = localStorage.getItem('token');
    return token ? new HttpHeaders()
                                    .set('Authorization', `Bearer ${token}`) : null;
  }

  async onSubmit() {
    try {
      let option_post = { headers: this.postHeaders() };
      const data = await this.http.post(
        'http://localhost:3000/api/employees', this.employeeForm.value, option_post
      ).subscribe(
        res => {
          console.log(res);
        }
      );
        this.router.navigateByUrl('/employee');
    } catch (error) {
      this.data.error(error['message']);
    }
  };
  // selectAll() {
  //   this.selectedAll = !this.selectedAll;
  //   console.log("selectAll()");
  //   for (var i = 0; i < this.names.length; i++) {
  //       this.names[i].selected = this.selectedAll;
  //   } 
  // }

  // checkIfAllSelected() {
  // var totalSelected =  0;
  // for (var i = 0; i < this.names.length; i++) {
  //       if(this.names[i].selected) totalSelected++;
  //   } 
  // this.selectedAll = totalSelected === this.names.length;

  // return true;
  // }

}
