import { Component, OnInit } from '@angular/core';
import { allcontacts } from '../mocks/contacts';
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
    this.contacts = allcontacts

  }

  onClick(contact: Contact):void {
    this.SelectedContact = contact;
  }
}
