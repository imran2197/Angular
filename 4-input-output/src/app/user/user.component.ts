import {
  Component,
  computed,
  EventEmitter,
  input,
  Input,
  Output,
  signal,
} from '@angular/core';
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
  @Input({ required: true }) id!: string;
  @Input({ required: true }) avatar!: string;
  @Input({ required: true }) name!: string;
  @Output() selectedUser = new EventEmitter();

  get imagePath() {
    return `../../assets/users/${this.avatar}`;
  }

  // With Signals Input
  // avatar = input.required<string>();
  // name = input.required<string>();

  // imagePath = computed(() => `../../assets/users/${this.avatar()}`);

  onSelectUser() {
    this.selectedUser.emit(this.id);
  }
}
