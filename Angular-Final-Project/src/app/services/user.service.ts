import { Injectable } from '@angular/core';
import { User } from '../models/user-model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  loggedUserDetails: User = new User();

  constructor() {
   let userDetail = sessionStorage.getItem('userDetails');
   this.loggedUserDetails = JSON.parse(userDetail);
  }
}
