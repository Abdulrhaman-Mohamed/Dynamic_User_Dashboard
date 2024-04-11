import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

const API = "https://reqres.in/api/users"

export interface User {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  avatar: string;
}

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }

  getUsers(page:number=1) {    
    return this.http.get<any>(API+`?page=${page}`);
  }

  getUserById(id:number) {
    return this.http.get<any>(API+`/${id}`);
  }
}
