import { Component, OnInit } from '@angular/core';
import { Contact } from '../models/contact';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit {

  contacts: Array<Contact>;
  SelectedContact: Contact;
  constructor() { }

  ngOnInit(): void {
    this.contacts = [
      {name: 'Juan', email: 'juan.carranza@gmail.com', telephone: '99812285', title: 'Sr' },
      {name: 'Eduardo', email: 'eduardo.zepeda@gmail.com', telephone: '951468712', title: 'Sr' },
      {name: 'Carlos', email: 'carlos.varela@gmail.com', telephone: '32654891', title: 'Sr' }
    ]
  }

  onClick(contact: Contact):void {
    this.SelectedContact = contact;
  }
}
