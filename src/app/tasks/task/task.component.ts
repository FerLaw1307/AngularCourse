import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Tarea } from './tarea.model';
import { CardComponent } from '../../shared/card/card.component';
import { DatePipe } from '@angular/common';
@Component({
  selector: 'app-task',
  standalone: true,
  imports: [CardComponent, DatePipe],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css',
})
export class TaskComponent {
  @Input({ required: true }) task!: Tarea;
  @Output() terminada = new EventEmitter<string>();

  onCompletedTask() {
    this.terminada.emit(this.task.id);
  }
}
