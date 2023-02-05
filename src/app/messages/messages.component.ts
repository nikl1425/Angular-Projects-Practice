import { Component } from '@angular/core';
import { MessageService } from '../message.service';


@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.scss']
})
export class MessagesComponent {

  // Angular only binds to public props from template.
  constructor(public messageService: MessageService){

  }
}
