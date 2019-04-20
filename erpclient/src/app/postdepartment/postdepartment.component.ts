import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { DataService } from '../data.service';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-postdepartment',
  templateUrl: './postdepartment.component.html',
  styleUrls: ['./postdepartment.component.css']
})
export class PostdepartmentComponent implements OnInit {
  
  departments: any;

  submitted = false;

  constructor(private location: Location, private http: HttpClient, private data: DataService, private router: Router, private fbuilder: FormBuilder, ) { }  

  cancel() {
    this.location.back();
  }

  getHeaders() {
    const token = localStorage.getItem('token');
    return token ? new HttpHeaders()
                                    .set('Authorization', `Bearer ${token}`) : null;
  }

  async ngOnInit() {
    let options = { headers: this.getHeaders() };
    const data = await this.http.get(
      'http://localhost:3000/api/departments',options
    ).subscribe(
      // res=>{}
      res=>this.departments = res
  );
  }

  deptFormcreate = new FormGroup({
    title: new FormControl('', [
      Validators.required
    ]),
    description: new FormControl('', [
      Validators.required
    ]),
    location: new FormControl('', [
      Validators.required,
    ]),
    parent_id:new FormControl('')
  });

  postHeaders() {
    const token = localStorage.getItem('token');
    return token ? new HttpHeaders()
                                    .set('Authorization', `Bearer ${token}` ) : null;
  }


  async onSubmit() {
    this.submitted = true;
    let options = { headers: this.postHeaders() };
    
    try {
      const data = await this.http.post(
        'http://localhost:3000/api/departments', this.deptFormcreate.value, options,
      ).subscribe( res => {
        console.log(res)
      });
      this.router.navigateByUrl('/departments');
    } catch(error) {
      this.data.error(error['message']);
    }
  }

}
