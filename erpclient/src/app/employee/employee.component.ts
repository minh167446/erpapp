import { Component, OnInit, ViewChild } from '@angular/core';
import { DataService } from '../data.service';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { PageEvent, MatTableDataSource, MatPaginator, MatDialog,  } from '@angular/material';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})

export class EmployeeComponent implements OnInit {
  employees: any;
  // total: number = 0;
  // limit: number = 5;
  // page: number = 1;
  filter: boolean = true;
  active: boolean =false;
  key: string;
  // @ViewChild(MatPaginator) paginator: MatPaginator;
  constructor(public dialog: MatDialog,private activatedRoute: ActivatedRoute,private http:HttpClient, private data: DataService, private router: Router) {}
  
  getHeaders() {
    const token = localStorage.getItem('token');
    return token ? new HttpHeaders()
                                    .set('Authorization', `Bearer ${token}`) : null;
  }

  async ngOnInit() {
    try {
      let options = { headers: this.getHeaders() };
      const data = await this.http.get(
        'http://localhost:3000/api/employees', options
      ).subscribe(
        res=>this.employees = res
        // this.employees = res
          // this.employees = [...res.employees.docs].slice(0,5);
          // this.total = res.employees.docs.length;        
    );
    } catch (error) {
      this.data.error(error['message']);
    }
  }

  showActive() {
    this.active = !this.active;
    this.filter = !this.filter;
  }

  deleteHeaders() {
    const token = localStorage.getItem('token');
    return token ? new HttpHeaders()
                                    .set('Authorization', `Bearer ${token}`) : null;
  }

  get_id(event) {
    var target = event.target || event.srcElement; 
    var idAttr = target.attributes['id'];
    console.log(idAttr);
 }

 formSearch = new FormGroup({
  keysearch: new FormControl('')
  });

 onSubmit() {
  let key =this.formSearch.value;
  let options = { headers: this.getHeaders() };
  try {
    this.http.post(
      `http://localhost:3000/api/employees/search/` + key, this.formSearch.value, options,
    ).subscribe( res => {
      console.log(res)
    })
  } catch (error) {
    console.log(error);
  }
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
         this.http.delete(
          `http://localhost:3000/api/employees/`, options,
        ).subscribe( res => {
          console.log(res)
        })
        setTimeout(()=>{
          this.router.navigateByUrl("/employee")
        }, 3500);
      if (result.value) {
        Swal.fire(
          'Đã Xóa!',
          'Nhân viên đã bị xóa.',
          'success'
        );
      }
    })
  }

  // get id():string { 
  //   return this.getid.serviceData; 
  // } 
  // set data(value: string) { 
  //   this.getid.serviceData = value; 
  // } 


  // openDialog() {
  //   const dialogRef = this.dialog.open(DeleteaempComponent, 
  //     { panelClass: 'custom-dialog-container' },);
    
  //   // dialogRef.afterClosed().subscribe(result => {
  //   //   console.log(`Dialog result: ${result}`);
  //   // });
  // }
  


  // getNext() {
  //   this.page++;
  //   let options = { headers: this.getHeaders() };
  //     const data = this.http.get<any[]>(
  //       'http://localhost:3000/api/employees', options
  //     ).subscribe(
  //       res=> {
  //         this.employees = [...res.employees.docs].slice((this.page-1)*this.limit,(this.page-1)*this.limit+6);
  //       })
  // }
}

