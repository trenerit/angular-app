import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-contact-add',
  templateUrl: './contact-add.component.html',
  styleUrls: ['./contact-add.component.scss']
})
export class ContactAddComponent {

  constructor(private fb: FormBuilder) {}

  protected addForm: any = this.fb.group({
    surname: 'Kania',
    firstname: 'Piotr',
    phoneNumber: '12334455'
  });
}
