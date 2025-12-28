import { Component, Input } from '@angular/core';
import { TaskComponent } from './task/task.component';
import { AddTaskComponent } from './add-task/add-task.component';
import { type addTask } from './add-task/addTask-model';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent, AddTaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css',
})
export class TasksComponent {
  @Input({ required: true }) userId!: string;
  @Input({ required: true }) name!: string;
  tasks = [
    {
      id: 't1',
      userId: 'u1',
      title: 'Master Angular',
      summary:
        'Learn all the basic and advanced features of Angular & how to apply them.',
      dueDate: '2025-12-31',
    },
    {
      id: 't2',
      userId: 'u3',
      title: 'Build first prototype',
      summary: 'Build a first prototype of the online shop website',
      dueDate: '2024-05-31',
    },
    {
      id: 't3',
      userId: 'u3',
      title: 'Prepare issue template',
      summary:
        'Prepare and describe an issue template which will help with project management',
      dueDate: '2024-06-15',
    },
  ];
  showAddTaskPopup = false;

  get getTaskForUser() {
    const filteredData = this.tasks.filter(
      (task) => task.userId === this.userId
    );
    return filteredData;
  }

  onCompleteTask(id: string) {
    this.tasks = this.tasks.filter((task) => task.id !== id);
  }

  onStartAddTask() {
    this.showAddTaskPopup = true;
  }

  onClosePopup() {
    this.showAddTaskPopup = false;
  }

  onAddTask(taskData: addTask) {
    this.tasks.push({
      id: new Date().getTime().toString(),
      userId: this.userId,
      title: taskData.title,
      summary: taskData.summary,
      dueDate: taskData.date,
    });
    this.showAddTaskPopup = false;
  }
}
