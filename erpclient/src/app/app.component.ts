import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from './data.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent  {
  title = 'erpclient';
  user: any;
 
  constructor(private router: Router, private data: DataService) {
    this.data.getProfile();
    this.user = this.data.getUser();
    this.data.event.subscribe(() => {
      this.data.getProfile();
      this.user = this.data.getUser();
      console.log(this.user);
    })
  }

  get Token() {
    return localStorage.getItem('token');
  }

  logout() {
    this.data.user = null;
    localStorage.clear();
    setTimeout(window.location.href = "/",200);
  }
}
