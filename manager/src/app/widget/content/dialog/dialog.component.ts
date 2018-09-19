import {Component, OnInit} from '@angular/core';
import {WebSocketService} from "../../../services/web-socket.service";

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {
  messages = [];

  constructor(private ws: WebSocketService) {
    /*this.messages = [
      {
        'sender': 'client',
        'text': 'Хочу купить рамку планетарий'
      },
      {
        'sender': 'manager',
        'text': 'Очень хорошо, 9 тысяч'
      },
    ];*/
  }

  ngOnInit() {
    this.ws.dialog$
      .subscribe((data: object[]) => {
          this.messages = data;
        }
      );

    this.ws.lastMessage$
      .subscribe(data => this.messages.push(data));
  }

}
