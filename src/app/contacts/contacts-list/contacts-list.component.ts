import { Component, OnInit } from '@angular/core';
import { ContactsService } from '../contacts.service';

@Component({
  selector: 'app-contacts-list',
  templateUrl: './contacts-list.component.html',
  styleUrls: ['./contacts-list.component.scss']
})
export class ContactsListComponent implements OnInit {

  protected contacts: any;
  
  constructor(private contactsService: ContactsService){}

  ngOnInit(): void {
    this.getContacts();
  }

  getContacts(): void {
    this.contactsService.getContacts().subscribe(res => {

      console.log(res);

      this.contacts = res;

    });
  }

  delContact(id: number) {
    const conf = confirm("Czy chcesz usunąć ten kontakt?");
    if(conf) {
      this.contactsService.removeContact(id).subscribe(res=> {
        console.log(res);
        this.getContacts();
      });
    }
  }

}
