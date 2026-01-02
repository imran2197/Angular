import {
  Component,
  EventEmitter,
  inject,
  Input,
  Output,
  signal,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { addTask } from './addTask-model';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-add-task',
  // standalone: true,
  // imports: [FormsModule],
  templateUrl: './add-task.component.html',
  styleUrl: './add-task.component.css',
})
export class AddTaskComponent {
  @Input({ required: true }) userId!: string;
  @Output() close = new EventEmitter<void>();

  private tasksService = inject(TasksService);
  // constructor(private tasksService: TasksService) {

  // }

  // 2 way binding without signals
  title = '';
  summary = '';
  dueDate = '';

  // 2 way binding with signals
  // title = signal('');
  // summary = signal('');
  // dueDate = signal('');

  onCancelAddTask() {
    this.close.emit();
  }

  onSubmit() {
    this.tasksService.addTask(
      {
        title: this.title,
        summary: this.summary,
        date: this.dueDate,
      },
      this.userId
    );
    this.close.emit();
  }
}
