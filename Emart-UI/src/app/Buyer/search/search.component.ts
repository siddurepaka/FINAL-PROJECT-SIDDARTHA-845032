import { Component, OnInit } from '@angular/core';
import{FormBuilder,FormGroup,Validators} from '@angular/forms';
import{Buyer}from 'src/app/model/buyer';
import{Items}from 'src/app/model/items';
import{BuyerService}from 'src/app/services/buyer.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  itemlist:Items[];
  searchform:FormGroup

 
  constructor() {}
    
 

  ngOnInit() {
  }
  
}
