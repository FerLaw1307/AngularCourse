import { Component, computed, input } from '@angular/core';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})

export class UserComponent {
  // @Input({ required: true }) avatar!: string;
  // @Input({ required: true }) userName!: string;
  URL_USERS_IMAGES = 'assets/usuarios/';
  avatar   = input.required<string>();
  userName = input.required<string>();

  routeImage = computed(() => { return this.URL_USERS_IMAGES + this.avatar()});
  // get routeImage() {
  //   return 'assets/usuarios/' + this.avatar();
  // }
  onSelectUser() {}
}
