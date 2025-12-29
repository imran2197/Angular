import { Component, Input } from '@angular/core';
import { TaskComponent } from './task/task.component';
import { AddTaskComponent } from './add-task/add-task.component';
import { type addTask } from './add-task/addTask-model';
import { TasksService } from './tasks.service';

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
  showAddTaskPopup = false;
  // private taskService = new TasksService();

  // Note :-
  //   Q: What is Dependency Injection in Angular?
  // Dependency Injection is a design pattern where Angular creates and provides the required dependencies (services) instead of the component creating them manually.

  // Q: Why should we use DI instead of new?
  // Avoids multiple instances
  // Promotes reusability
  // Improves testability
  // Reduces tight coupling

  // Q: What happens if we use new TasksService()?
  // Each component gets a new instance, which breaks shared state and is not recommended in Angular.

  constructor(private taskService: TasksService) {}

  get getTaskForUser() {
    return this.taskService.getUserTasks(this.userId);
  }

  onStartAddTask() {
    this.showAddTaskPopup = true;
  }

  onClosePopup() {
    this.showAddTaskPopup = false;
  }
}
