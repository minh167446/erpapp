import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { DataService } from '../data.service';
import { ActivatedRoute ,Router } from '@angular/router';
import { Location } from '@angular/common';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-editdepartment',
  templateUrl: './editdepartment.component.html',
  styleUrls: ['./editdepartment.component.css']
})
export class EditdepartmentComponent implements OnInit {

  department: any;

  submitted = false;

  constructor(private location: Location, private activatedRoute: ActivatedRoute,private http: HttpClient, private data: DataService, private router: Router, private fbuilder: FormBuilder,) { }
  
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
    this.activatedRoute.params.subscribe(res => {
    const data =  this.http.get(
      `http://localhost:3000/api/departments/${res['id']}`,options
    ).subscribe(
        res=> {
          this.deptFormedit.controls['title'].setValue(res['department'].title);
          this.deptFormedit.controls['description'].setValue(res['department'].description);
          this.deptFormedit.controls['location'].setValue(res['department'].location);
          this.department = res
        }); 
      // res=>{
      //   console.log(res)
      // }
    }
  )};


  deptFormedit = new FormGroup({
    title: new FormControl(''),
    description: new FormControl(''),
    location: new FormControl('')
  });

  putHeaders() {
    const token = localStorage.getItem('token');
    return token ? new HttpHeaders()
                                    .set('Authorization', `Bearer ${token}` ) : null;
  }

  onSubmit() {
    this.submitted = true;  
    console.log(this.deptFormedit.value);
    let options = { headers: this.putHeaders() };
     this.activatedRoute.params.subscribe(res => {
       this.http.put(
      `http://localhost:3000/api/departments/${res['id']}`, this.deptFormedit.value, options,
    ).subscribe( res => {
      console.log(res)
    })
   this.router.navigateByUrl('/departments');
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
          this.router.navigateByUrl("/departments")
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

  delete_emp() {
    Swal.fire({
      title: 'Bạn chắc chứ?',
      text: "You won't be able to revert this!",
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, Xóa nhân viên!'
    }).then((result) => {
      // let options = { headers: this.deleteHeaders() };
      // this.activatedRoute.params.subscribe(res => {
      //   this.http.post(
      //     `http://localhost:3000/api/departments/deleteEmployee`, options,
      //   ).subscribe( res => {
      //     console.log(res)
      //   })
      //   setTimeout(()=>{
      //     this.router.navigateByUrl("/departments")
      //   }, 4000);
      // });
      if (result.value) {
        Swal.fire(
          'Đã Xóa!',
          'Nhân viên đã xóa.',
          'success'
        );
      }
    })
  }
  

}
