import { Component, OnInit } from '@angular/core';
import{FormBuilder,FormGroup,Validators} from '@angular/forms';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css']
})
export class AddCategoryComponent implements OnInit {
  addcform:FormGroup;
  submitted=false;
  

  constructor(private formbuilder:FormBuilder) { }

  ngOnInit() {
    
  }

}
