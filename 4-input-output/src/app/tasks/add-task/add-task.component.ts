import { Component, EventEmitter, Output, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { addTask } from './addTask-model';

@Component({
  selector: 'app-add-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './add-task.component.html',
  styleUrl: './add-task.component.css',
})
export class AddTaskComponent {
  @Output() onCancel = new EventEmitter<void>();
  @Output() onAdd = new EventEmitter<addTask>();

  // 2 way binding without signals
  title = '';
  summary = '';
  dueDate = '';

  // 2 way binding with signals
  // title = signal('');
  // summary = signal('');
  // dueDate = signal('');

  onCancelAddTask() {
    this.onCancel.emit();
  }

  onSubmit() {
    this.onAdd.emit({
      title: this.title,
      summary: this.summary,
      date: this.dueDate,
    });
  }
}
