import { Injectable, EventEmitter } from '@angular/core';
import { RestApiService } from './rest-api.service';
import { NavigationStart, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  message = "";
  messageType = "danger";
  user: any;
  event: EventEmitter<any> = new EventEmitter();

  constructor(private router: Router, private rest: RestApiService) {
    this.router.events.subscribe(event => {
      if(event instanceof NavigationStart) {
        this.message = "";
      }
    });
  }

  getUser() {
    return this.user;
  }

  error(message) {
    this.messageType = 'danger';
    this.message = message;  
  }

  success(message) {
    this.messageType = 'success';
    this.message = message;  
  }

  warning(message) {
    this.messageType = 'warning';
    this.message = message;  
  }

  trigger () {
    this.event.emit();
  }

  getProfile() {
    try {
      if(localStorage.getItem('token')) {
        const data = this.rest.get(
          'http://localhost:3000/api/users/me'
        );
        this.user = data;
      }
  } catch(error) {
    this.error(error);
  }
  }
}
