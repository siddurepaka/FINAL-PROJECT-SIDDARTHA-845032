import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(private route:Router) { }

  ngOnInit() {
  }
  Logout(){
    localStorage.clear();
    this.route.navigateByUrl('/home/login')
  }


}
