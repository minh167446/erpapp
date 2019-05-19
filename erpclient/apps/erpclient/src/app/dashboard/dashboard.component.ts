import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor() { }
  isCollpased = true;
  ngOnInit() {
  }

  collapse() {
    this.isCollpased = true;
  }

  closeDropdown(dropdown) {
    dropdown.close();
  }

}
