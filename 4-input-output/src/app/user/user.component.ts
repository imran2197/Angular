import {
  Component,
  computed,
  EventEmitter,
  input,
  Input,
  output,
  Output,
  signal,
} from '@angular/core';
import { type User } from './user.model';

import { DUMMY_USERS } from '../dummy-users';

const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  // Note:- @Component(), @Input() and @Output are the decorators

  // Without Input Signal
  @Input({ required: true }) users!: User;
  @Input({ required: true }) isSelected!: boolean;
  @Output() selectedUser = new EventEmitter();

  get imagePath() {
    return `../../assets/users/${this.users?.avatar}`;
  }

  onSelectUser() {
    this.selectedUser.emit(this.users?.id);
  }

  // With Signals Input
  // users = input.required<{}>()
  // selectedUser = output<string>();

  // imagePath = computed(() => `../../assets/users/${this.avatar()}`);

  // onSelectUser() {
  //   this.selectedUser.emit(this.id());
  // }
}
