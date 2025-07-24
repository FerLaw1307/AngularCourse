import { Component } from '@angular/core';
import { USUARIOS_FALSOS } from '../fake-users';
const indexRandom = Math.floor(Math.random() * USUARIOS_FALSOS.length);
@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  selectedUser = USUARIOS_FALSOS[indexRandom];

  get imageRoute(){
    return 'assets/usuarios/' + this.selectedUser.avatar;
  }

  onSelectUser(){
    console.log("Click!!");
    const indexRandom = Math.floor(Math.random() * USUARIOS_FALSOS.length);
    this.selectedUser = USUARIOS_FALSOS[indexRandom];
  }
}
