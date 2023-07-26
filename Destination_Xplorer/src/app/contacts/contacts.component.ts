import { Component } from '@angular/core';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent {
  sendMessageForm(): void {
    // Here, you can add code to handle the form submission.
    // For this example, we'll display an alert after sending the message.

    // Display an alert after sending the message.
    window.alert('Message sent successfully!');
  }
}