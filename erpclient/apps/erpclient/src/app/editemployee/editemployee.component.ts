import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { DataService } from '../data.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-editemployee',
  templateUrl: './editemployee.component.html',
  styleUrls: ['./editemployee.component.css']
})
export class EditemployeeComponent implements OnInit {

  departments: any;
  // listDeps = new FormControl();
  submitted = false;
  selected: any = [];
  employee: any;
  
  listOfJobType = [{name: 'Nhân viên chính thức', id:'1'},{name: 'Thử việc ', id:'2'}, {name: 'Nhân viên thời vụ', id:'3'}];

  constructor(private location: Location,private http: HttpClient ,private activatedRoute: ActivatedRoute, private data: DataService, private router: Router) {}
 
  cancel() {
    this.location.back();
  }

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
              res=> {
                this.departments = res;
              }
            )
      this.http.get(`http://localhost:3000/api/employees/${res['id']}`, options)
      .subscribe(
        res=> {
          this.employeeFormedit.controls['fullname'].setValue(res['employee'].fullname);
          this.employeeFormedit.controls['email'].setValue(res['employee'].email);
          this.employeeFormedit.controls['phone'].setValue(res['employee'].phone);
          this.employee = res;
        }
        //this.employee = res
      )      
    });
  } catch (error) {
    this.data.error(error['message']);
  }
  }

  employeeFormedit = new FormGroup({
    fullname: new FormControl(''),
    email: new FormControl(''),
    phone: new FormControl(''),
    jobType: new FormControl(''),
    departments: new FormControl('')
  });

  putHeaders() {
    const token = localStorage.getItem('token');
    return token ? new HttpHeaders()
                                    .set('Authorization', `Bearer ${token}` ) : null;
  }

  async onSubmit() {
    this.submitted = true; 
    console.log(this.employeeFormedit.value); 
    let options = { headers: this.putHeaders() };
     this.activatedRoute.params.subscribe(res => {
       this.http.put(
      `http://localhost:3000/api/employees/${res['id']}`, this.employeeFormedit.value, options,
    ).subscribe( res => {
      console.log(res)
    })
    this.router.navigateByUrl('/employee');
    });
  }

  deleteHeaders() {
    const token = localStorage.getItem('token');
    return token ? new HttpHeaders()
                                    .set('Authorization', `Bearer ${token}`) : null;
  }

  delete() {
    Swal.fire({
      title: 'Bạn chắc chứ?',
      text: "You won't be able to revert this!",
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, Xóa nó!'
    }).then((result) => {
      let options = { headers: this.deleteHeaders() };
      this.activatedRoute.params.subscribe(res => {
        this.http.delete(
          `http://localhost:3000/api/departments/${res['id']}`, options,
        ).subscribe( res => {
          console.log(res)
        })
        setTimeout(()=>{
          this.router.navigateByUrl("/employee")
        }, 4000);
      });
      if (result.value) {
        Swal.fire(
          'Đã Xóa!',
          'Phòng ban đã xóa.',
          'success'
        );
      }
    })
  }
}
