import { Component, Input } from '@angular/core';
import { TaskComponent } from './task/task.component';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css',
})
export class TasksComponent {
  @Input({ required: true }) idUsuario!: string;
  @Input({ required: true }) userName!: string;

  get tareasUsuarioSeleccionado(){
    return this.tasks.filter((t) => t.idUsuario == this.idUsuario);
  }

  onCompletedTask(id: string){
    this.tasks = this.tasks.filter((t) => t.id !== id);
  }

  tasks = [
    {
      id: 't1',
      idUsuario: 'u1',
      titulo: 'Dominar Angular',
      resumen: 'Aprender todo de angula',
      expira: '2025-01-01',
    },
    {
      id: 't2',
      idUsuario: 'u3',
      titulo: 'Crear el primer prototipo',
      resumen: 'Crear el primer prototipo del sitio web de la tienda',
      expira: '2025-11-05',
    },
    {
      id: 't3',
      idUsuario: 'u3',
      titulo: 'Preparar la plantilla del carrito',
      resumen:
        'Preparar y describir una plantilla de carrito de compras de la tienda online',
      expira: '2025-05-16',
    },
  ];
}
