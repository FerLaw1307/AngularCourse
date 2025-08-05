import { Component } from '@angular/core';
import { USUARIOS_FALSOS } from './fake-users';

@Component({
  selector: 'app-raiz',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  users = USUARIOS_FALSOS;
  userIdSelected?: string;
  get selectedUser() {
    return this.users.find((u) => u.id === this.userIdSelected)!;
  }
  onSelectedUser(id: string) {
    this.userIdSelected = id;
  }
}
