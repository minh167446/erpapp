import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { DataService } from '../data.service';

@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.css']
})
export class DepartmentComponent implements OnInit {

  departments:any;

  constructor(private http:HttpClient, private data: DataService) {
   }

   getHeaders() {
    const token = localStorage.getItem('token');
    return token ? new HttpHeaders()
                                    .set('Authorization', `Bearer ${token}`) : null;
  }

   async ngOnInit() {
    try {
      let options = { headers: this.getHeaders() };
      const data = await this.http.get(
        'http://localhost:3000/api/departments',options
      ).subscribe(
        // res=>{}
        res=>this.departments = res
    );
      // data['success'] ? (this.departments = data['departments']) : this.data.error(data['message']);
    } catch (error) {
      this.data.error(error['message']);
    }
  }

}
