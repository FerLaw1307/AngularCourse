import { Component, inject, Input } from '@angular/core';
import { Tarea } from './tarea.model';
import { TasksService } from '../tasks.service';
@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrl: './task.component.css',
})
export class TaskComponent {
  @Input({ required: true }) task!: Tarea;
  // @Output() terminada = new EventEmitter<string>();
  private tasksService = inject(TasksService);

  onCompletedTask() {
    this.tasksService.deleteTask(this.task.id);
    // this.terminada.emit(this.task.id);
  }
}
