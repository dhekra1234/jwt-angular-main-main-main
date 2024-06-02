import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import * as bootstrap from 'bootstrap';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent {
  username: string ="";
  email: string ="";
  password: string ="";
  constructor(private http: HttpClient) 
  { }
  openSignUpModal() {
    const signUpModal = new bootstrap.Modal(document.getElementById('signup-modal'), {
      keyboard: false
    });
    signUpModal.show();
  }
  
  save()
  {
  
    let bodyData = {
      "username" : this.username,
      "email" : this.email,
      "password" : this.password
    };
    this.http.post("http://localhost:8080/api/v1/user/save",bodyData,{responseType: 'text'}).subscribe((resultData: any)=>
    {
        console.log(resultData);
        alert("User Registered Successfully");
    });
  }

}