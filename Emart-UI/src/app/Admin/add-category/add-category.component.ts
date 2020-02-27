import { Component, OnInit } from '@angular/core';
import{FormBuilder,FormGroup,Validators} from '@angular/forms';
import { Category } from 'src/app/model/category';
import{ AdminService }from'src/app/services/admin.service';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css']
})
export class AddCategoryComponent implements OnInit {
  addcform:FormGroup;
  submitted=false;
  addc:Category;
  categorylist:Category[];
  

  constructor(private formBuilder:FormBuilder,private service:AdminService) {
    this.addc=new Category();
  }

  ngOnInit() {
    this.addcform=this.formBuilder.group({
      category_id:['',Validators.required],
category_name:['',Validators.required],
briefdetails:['',Validators.required],
});
}

OnSubmit()
{
  this.submitted=true;
  if(this.addcform.valid)
  {
    alert('Success!!\n\n')
    this.addc.categoryid=this.addcform.value['category_id'],
    this.addc.categoryname=this.addcform.value['category_name'],
    this.addc.briefdetails=this.addcform.value['briefdetails'],
    console.log(this.addc); 
    this.service.AddCategory(this.addc).subscribe(res=>{
      alert('Added Successfully');
    },err=>{
      console.log(err);
    })
  }
}
get f() { return this.addcform.controls; }
onReset()
{
this.submitted=false;
this.addcform.reset();
}
}


    
