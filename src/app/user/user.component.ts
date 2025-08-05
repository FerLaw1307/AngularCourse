import { Component, EventEmitter, Input, Output, output } from '@angular/core';
import { Usuario } from './usuario.model';
import { CardComponent } from "../shared/card/card.component";
@Component({
  selector: 'app-user',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  URL_USERS_IMAGES = 'assets/usuarios/';
  @Input({ required: true }) user!: Usuario;
  @Input({ required: true }) seleccionado!: boolean;
  @Output() selected = new EventEmitter<string>();

  get routeImage() {
    return this.URL_USERS_IMAGES + this.user.avatar;
  }
  onSelectUser() {
    this.selected.emit(this.user.id);
  }
}
