import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Contact } from '../contact.model';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  private baseUri = "http://localhost:3000/contact";
  private headers = new HttpHeaders({ 'content-type': 'application/json' });
  constructor(private http: HttpClient, private router: Router) { }

  addContact(contact: Contact) {
    return this.http.post<any>(this.baseUri + "/" + "add", contact, { headers: this.headers });
  }

  getContacts(){
    return this.http.get<any>(this.baseUri);
  }

  updateContact(contact: Contact) {
    return this.http.put<any>(this.baseUri + "/" + contact._id, contact,{ headers: this.headers });
  }

  deleteContact(contact: Contact) {
    return this.http.delete<any>(this.baseUri + "/" + contact._id);
  }
}
