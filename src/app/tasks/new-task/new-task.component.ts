import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { type NewTaskInfo } from '../task/tarea.model';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-new-task',
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css',
})
export class NewTaskComponent {
  @Input({ required: true }) idUsusario!: string;
  @Output() close = new EventEmitter<void>();
  inputTitle: string = '';
  inputDescription: string = '';
  inputDate: string = '';

  private taskService = inject(TasksService);

  onCancell() {
    this.close.emit();
  }
  onSubmit() {
    this.taskService.addTask(
      {
        titulo: this.inputTitle,
        resumen: this.inputDescription,
        fecha: this.inputDate,
      },
      this.idUsusario
    );
    this.close.emit();
  }
}
