import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  user={"firstName":"Arunima","lastName":"Gupta","email":"arunimagupta71@gmail.com","password":"123456789"};

  getUser(){
    return this.user;
  }
}
