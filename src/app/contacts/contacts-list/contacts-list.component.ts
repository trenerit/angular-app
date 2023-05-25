import { Component } from '@angular/core';

@Component({
  selector: 'app-contacts-list',
  templateUrl: './contacts-list.component.html',
  styleUrls: ['./contacts-list.component.scss']
})
export class ContactsListComponent {

  protected contacts: any = [
    {id: 1, surname: 'Nowak', firstName: 'Tomek', phoneNumber: '1234567890'}
  ]

}
