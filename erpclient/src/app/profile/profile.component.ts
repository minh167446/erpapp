import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  
  user: any;
  
  constructor(private data: DataService) {
    this.user = this.data.getUser();
    this.data.event.subscribe(() => {
      this.user = this.data.getUser();
    })
   }

  ngOnInit() {  
  }
}
