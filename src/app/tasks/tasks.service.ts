import { Injectable } from '@angular/core';
import { type NewTaskInfo } from './task/tarea.model';

@Injectable({ providedIn: 'root' })
export class TasksService {
  constructor() 
  {
    const tasks = localStorage.getItem('tasks');
    if(tasks){
        this.tasks = JSON.parse(tasks);
    }
  }

  getUserTasks(userId: string) {
    return this.tasks.filter((t) => t.idUsuario == userId);
  }

  addTask(infoTask: NewTaskInfo, idUsuario: string) {
    var newTask = {
      id: new Date().getTime().toString(),
      titulo: infoTask.titulo,
      resumen: infoTask.resumen,
      expira: infoTask.fecha,
      idUsuario: idUsuario,
    };

    this.tasks.unshift(newTask);
    this.saveTasks();
  }

  deleteTask(id: string) {
    this.tasks = this.tasks.filter((t) => t.id !== id);
    this.saveTasks();
  }

  private saveTasks(){
    localStorage.setItem('tasks', JSON.stringify(this.tasks));
  }

  private tasks = [
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
