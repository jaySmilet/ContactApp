import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Contact } from '../contact.model';
import { ContactService } from '../shared/contact.service';

@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
  styleUrls: ['./add-contact.component.css']
})
export class AddContactComponent implements OnInit {

  myReactiveForm: FormGroup;
  @Input() contacts: Contact[] = [];
  constructor(private contactService: ContactService, 
    private router: Router) { }

  ngOnInit(): void {
    this.myReactiveForm = new FormGroup({
      'name': new FormControl(null, Validators.required),
      'email': new FormControl(null, Validators.required),
      'phone': new FormControl(null, Validators.required),
      'jobtitle': new FormControl(null, Validators.required),
      'company': new FormControl(null, Validators.required)
    })
  }

  submitAddContactForm() {
    // console.log(this.myReactiveForm.value)
    // this.contacts.push(this.myReactiveForm.value)
    this.contactService.addContact(this.myReactiveForm.value)
      .subscribe(
        (res) => {
          this.contacts.push(res);
          this.router.navigate(['/contactApp'])
        },
        (err) => console.log(err)
      );
  }

}
