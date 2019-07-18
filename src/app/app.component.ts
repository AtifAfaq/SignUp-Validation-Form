import { Component, OnInit } from '@angular/core';
import {FormBuilder,FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'formvalidation';
  signupForm:FormGroup
  firstName:FormControl
  lastName:FormControl
  email:FormControl

  constructor(private formBuilder: FormBuilder){}
  ngOnInit(){
    this.createFormControls()
    this.createForm()
  }
  createFormControls(){
    this.firstName= new FormControl('',[Validators.required, Validators.maxLength(9),])
    this.lastName= new FormControl('',[Validators.required, Validators.minLength(9),])
   this.email= new FormControl('',Validators.required)
  }
createForm(){
  this.signupForm= new FormGroup({
    firstName:this.firstName,
    lastName:this.lastName,
    email:this.email,
  });
}

}
