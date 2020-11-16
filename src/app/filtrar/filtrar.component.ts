import { Component, OnInit } from '@angular/core';
import { Contact } from '../models/contact';

@Component({
  selector: 'app-filtrar',
  templateUrl: './filtrar.component.html',
  styleUrls: ['./filtrar.component.css']
})
export class FiltrarComponent implements OnInit {

  contacts: Array<Contact>;
  constructor() { }

  ngOnInit(): void {
     this.contacts = [
       {name: "Juan", email: "juan.carranza@gmail.com", telephone: "99812285", title: "Sr"}
     ]
  }

}
