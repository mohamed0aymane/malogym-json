import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { register } from 'module';
import { User } from '../models/user.model';
import { Contact } from '../models/contact.model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private baseUrl: string='http://localhost:3000/enquiry'
  private baseUrl1: string='http://localhost:3000/contact'

  constructor(private http: HttpClient) { }
  
  postRegistration(registerObj: User){
    return this.http.post<User>(`${this.baseUrl}`,registerObj)
  }

  getRegisteredUser(){
    return this.http.get<User[]>(`${this.baseUrl}`)
  }

  updateRegisterUser(registerObj: User,id: number){
    return this.http.put<User>(`${this.baseUrl}/${id}`,registerObj)
  }

  deleteRegistered(id:number) {
    return this.http.delete<User>(`${this.baseUrl}/${id}`)
  }

  getRegisteredUserId(id: number){
    return this.http.get<User>(`${this.baseUrl}/${id}`)
  }

  
  postContact(registerObj:Contact){
    return this.http.post<Contact>(`${this.baseUrl1}`,registerObj)
  }

  getContactList(){
    return this.http.get<Contact[]>(`${this.baseUrl1}`)
  }

  deleteContact(id:number) {
    return this.http.delete<Contact>(`${this.baseUrl1}/${id}`)
  }
}
