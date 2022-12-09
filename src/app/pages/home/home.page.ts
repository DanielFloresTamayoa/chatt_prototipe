import { Component, OnInit, ViewChild } from '@angular/core';
import { ModalController, PopoverController } from '@ionic/angular';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  @ViewChild('new_chat') modal: ModalController;
  @ViewChild('popover') popover: PopoverController;

  segment = "chats";
  open_new_chat = false;
  users = [
    { id: 1, name: 'Daniel', photo: 'https://i.pravatar.cc/64' },
    { id: 2, name: 'Julio', photo: 'https://i.pravatar.cc/301' },
    { id: 3, name: 'David', photo: 'https://i.pravatar.cc/300' },

  ];

  chatRooms = [
    { id: 1, name: 'Mario', photo: 'https://i.pravatar.cc/64' },
    { id: 2, name: 'Julio', photo: 'https://i.pravatar.cc/301' },
    { id: 3, name: 'David', photo: 'https://i.pravatar.cc/300' },

  ];



  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  logout() {
    this.popover.dismiss();
  }
  onSegmentChanged(event: any) {
    console.log(event)
  }

  newChat() {

    this.open_new_chat = true;
  }

  onWillDismiss(event: any) {

  } 
  cancel() {
    this.modal.dismiss();
    this.open_new_chat = false;
  }
  startChat(item) { }

  getChat(item) {
    this.router.navigate(['/', 'home', 'chats', item?.id]);
  }
}
