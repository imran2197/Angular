import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { CommonModule } from '@angular/common';

import { TaskComponent } from './task/task.component';
import { TasksComponent } from './tasks.component';
import { AddTaskComponent } from './add-task/add-task.component';

@NgModule({
  declarations: [TasksComponent, TaskComponent, AddTaskComponent],
  exports: [TasksComponent],
  imports: [CommonModule, FormsModule, SharedModule],
})
export class TasksModule {}
