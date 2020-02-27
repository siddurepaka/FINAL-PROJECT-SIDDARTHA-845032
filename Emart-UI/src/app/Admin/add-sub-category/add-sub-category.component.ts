import { Component, OnInit } from '@angular/core';
import{FormBuilder,FormGroup,Validators} from '@angular/forms';
import{ AdminService }from'src/app/services/admin.service';
import{SubCategory}from 'src/app/model/sub-category';


@Component({
  selector: 'app-add-sub-category',
  templateUrl: './add-sub-category.component.html',
  styleUrls: ['./add-sub-category.component.css']
})
export class AddSubCategoryComponent implements OnInit {
  subform:FormGroup;
  submitted=false;
  sub:SubCategory;

  constructor(private formBuilder:FormBuilder,private service:AdminService) {
    this.sub=new SubCategory();
  }

  ngOnInit() {
    this.subform=this.formBuilder.group({
      subcategoryid:['',Validators.required],
subcategoryname:['',Validators.required],
briefdetails:['',Validators.required],
GSTPercentage:['',Validators.required],
categoryid:['',Validators.required]
});
  }


OnSubmit()
{
  this.submitted=true;
  if(this.subform.valid)
  {
    alert('Success!!\n\n')
    this.sub.categoryid=this.subform.value['categoryid'],
    this.sub.subcategoryid=this.subform.value['subcategoryid'],
    this.sub.subcategoryname=this.subform.value['subcategoryname'],
    this.sub.briefdetails=this.subform.value['briefdetails'],
    this.sub.gst=this.subform.value['GSTPercentage']
    console.log(this.sub); 
    this.service.AddSubCategory(this.sub).subscribe(res=>{
      alert('Added Successfully');
    },err=>{
      console.log(err);
    })
  }
}
get f() { return this.subform.controls; }
onReset()
{
this.submitted=false;
this.subform.reset();
}
}

