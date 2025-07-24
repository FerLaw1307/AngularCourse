import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { UserComponent } from './user/user.component';
import { TasksComponent } from './tasks/tasks.component';
import { USUARIOS_FALSOS } from './fake-users';
@Component({
  selector: 'app-raiz',
  standalone: true,
  imports: [HeaderComponent, UserComponent, TasksComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  users = USUARIOS_FALSOS;
  userIdSelected = 'u1';
  get selectedUser(){
    return this.users.find((u) => u.id === this.userIdSelected)!;
  }
  onSelectedUser(id: string) {
    this.userIdSelected = id;
  }
}
