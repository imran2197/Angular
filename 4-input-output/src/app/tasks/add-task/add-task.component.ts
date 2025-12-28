import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './add-task.component.html',
  styleUrl: './add-task.component.css',
})
export class AddTaskComponent {
  @Output() onCancel = new EventEmitter<void>();

  title = '';
  summary = '';
  dueDate = '';

  onCancelAddTask() {
    this.onCancel.emit();
  }
}
