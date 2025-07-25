import { Component, EventEmitter, Input, Output, output } from '@angular/core';

interface Usuario {
  id: string;
  nombre: string;
  avatar: string;
}

// type Usuario = {
//   id: string;
//   nombre: string;
//   avatar: string;
// };
@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  URL_USERS_IMAGES = 'assets/usuarios/';
  @Input({ required: true }) user!: Usuario;
  @Output() selected = new EventEmitter<string>();

  get routeImage() {
    return this.URL_USERS_IMAGES + this.user.avatar;
  }
  onSelectUser() {
    this.selected.emit(this.user.id);
  }
}
