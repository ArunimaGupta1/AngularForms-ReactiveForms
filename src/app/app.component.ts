import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from './user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Reactive-Form';
  submitted = false;
  constructor(private formBuilder:FormBuilder,private service:UserService){}
  registerForm: FormGroup;
  

  

  ngOnInit(){
    this.registerForm=this.formBuilder.group({
    firstname:['',Validators.required],
    lastname:['',Validators.required],
    email:['',Validators.required,Validators.email],
    password:['',Validators.required,Validators.minLength(8)]
  });
}
 get f(){
   return this.registerForm.controls;
 } 

 onSubmit(){
   this.submitted = true;

   if(this.registerForm.invalid){
     return;
   }
   else{
     alert('Your request has been submitted for approval');
   }
 }
}
