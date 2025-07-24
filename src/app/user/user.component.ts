import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  URL_USERS_IMAGES = 'assets/usuarios/';
  @Input({ required: true }) avatar!: string;
  @Input({ required: true }) userName!: string;
  @Input({ required: true }) id!: string;
  @Output() selected = new EventEmitter();

  get routeImage() {
    return this.URL_USERS_IMAGES + this.avatar;
  }
  onSelectUser() {
    this.selected.emit(this.id);
  }
}
