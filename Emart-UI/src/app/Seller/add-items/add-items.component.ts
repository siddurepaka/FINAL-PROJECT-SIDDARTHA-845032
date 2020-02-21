import { Component, OnInit } from '@angular/core';
import{FormBuilder,FormGroup,Validators} from '@angular/forms';
import { Items } from 'src/app/model/items';

@Component({
  selector: 'app-add-items',
  templateUrl: './add-items.component.html',
  styleUrls: ['./add-items.component.css']
})
export class AddItemsComponent implements OnInit {
  addform:FormGroup;
  submitted=false;
  


  constructor(private formbuilder:FormBuilder) { }

  ngOnInit() {
    this.addform=this.formbuilder.group({
    id:['',[Validators.required,Validators.pattern("^[A-Za-z0-9]{8}$")]],
    cid:['',Validators.required],
    scid:['',Validators.required],
    price:['',Validators.required],
    itemname:['',Validators.required],
    description:['',Validators.required],
    stocknumber:['',Validators.required],
    remarks:['',Validators.required],
    });
  }
  get f(){return this.addform.controls;}
  OnSubmit()
  {
    this.submitted=true;
    if(this.addform.valid)
    {
      alert('Success!!\n\n')
    }
  }

}
