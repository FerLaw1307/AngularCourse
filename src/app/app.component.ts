import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { UserComponent } from './user/user.component';
import { TasksComponent } from './tasks/tasks.component';
import { TaskComponent } from './tasks/task/task.component';
import { USUARIOS_FALSOS } from './fake-users';
@Component({
  selector: 'app-raiz',
  standalone: true,
  imports: [HeaderComponent, UserComponent, TasksComponent, TaskComponent],
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
