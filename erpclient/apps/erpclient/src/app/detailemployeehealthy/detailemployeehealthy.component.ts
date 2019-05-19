import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { DataService } from '../data.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-detailemployeehealthy',
  templateUrl: './detailemployeehealthy.component.html',
  styleUrls: ['./detailemployeehealthy.component.css']
})
export class DetailemployeehealthyComponent implements OnInit {

  employee:any;

  constructor(private activatedRoute: ActivatedRoute, private data: DataService, private router: Router, private http: HttpClient) { }

  getHeaders() {
    const token = localStorage.getItem('token');
    return token ? new HttpHeaders()
                                    .set('Authorization', `Bearer ${token}`) : null;
  }

  ngOnInit() {
    let options = { headers: this.getHeaders() };
    this.activatedRoute.params.subscribe(res => {
      this.http.get(`http://localhost:3000/api/employees/${res['id']}`, options)
                  .subscribe( res => {
                    this.employee = res;
                  })            
    });
  }

}
