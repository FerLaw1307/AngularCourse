import { Component, Input } from '@angular/core';
import { type NewTaskInfo } from './task/tarea.model';
import { TasksService } from './tasks.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css',
})
export class TasksComponent {
  @Input({ required: true }) idUsuario!: string;
  @Input({ required: true }) userName!: string;
  areAddNewTask: boolean = false;
  // private tasksService : TasksService;

  constructor(private tasksService: TasksService){
    // this.tasksService = tasksService;
  }

  get tareasUsuarioSeleccionado(){
    return this.tasksService.getUserTasks(this.idUsuario);
  }

  onCompletedTask(id: string){
  }

  onInitNewTask(){
    this.areAddNewTask = !this.areAddNewTask;
  }

  onCloseNewTask(){
    this.areAddNewTask = false;
  }
}
