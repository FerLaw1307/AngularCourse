import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Tarea } from './tarea.model';

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css',
})
export class TaskComponent {
  @Input({ required: true }) task!: Tarea;
  @Output() terminada = new EventEmitter<string>();

  onCompletedTask(){
    this.terminada.emit(this.task.id);
  }
}
