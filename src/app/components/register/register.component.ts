import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    
  }
  register(form:NgForm){
    const{ prénom, nom, email, password } = form.value;
    if(!form.valid){
      return;
    }
  }

}
