import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { type NewTaskInfo } from '../task/tarea.model';

@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css',
})
export class NewTaskComponent {
  @Output() cancell = new EventEmitter<void>();
  @Output() onAddTask = new EventEmitter<NewTaskInfo>();
  inputTitle: string = '';
  inputDescription: string = '';
  inputDate: string = '';

  onCancell() {
    this.cancell.emit();
  }
  onSubmit() {
    this.onAddTask.emit({
      titulo: this.inputTitle,
      resumen: this.inputDescription,
      fecha: this.inputDate
    });
  }
}
