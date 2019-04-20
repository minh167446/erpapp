import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { DataService } from '../data.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-deleteaemp',
  templateUrl: './deleteaemp.component.html',
  styleUrls: ['./deleteaemp.component.css']
})
export class DeleteaempComponent implements OnInit {

  constructor(private dialogRef: MatDialogRef<DeleteaempComponent>, private http: HttpClient ,private activatedRoute: ActivatedRoute, private data: DataService, private router: Router) { }

  ngOnInit() {
  }

  deleteHeaders() {
    const token = localStorage.getItem('token');
    return token ? new HttpHeaders()
                                    .set('Authorization', `Bearer ${token}`) : null;
  }

  delete() {
    let options = { headers: this.deleteHeaders() };
    this.activatedRoute.params.subscribe(res => {
      this.http.delete(
        `http://localhost:3000/api/employees/${res['id']}`, options,
      ).subscribe( res => {
        console.log(res)
      })
      this.router.navigateByUrl("/employee");
    });
  }

  close() {
    this.dialogRef.close();
  }
}
