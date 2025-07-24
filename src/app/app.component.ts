import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { UserComponent } from './user/user.component';
import { USUARIOS_FALSOS } from './fake-users';
@Component({
  selector: 'app-raiz',
  standalone: true,
  imports: [HeaderComponent, UserComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  users = USUARIOS_FALSOS;
  onSelectedUser(id: string) {
    console.log('selected user ' + id);
  }
}
