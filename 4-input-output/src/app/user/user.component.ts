import { Component, computed, input, Input, signal } from '@angular/core';
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
  // Without Input Signal
  @Input({ required: true }) avatar!: string;
  @Input({ required: true }) name!: string;

  get imagePath() {
    return `../../assets/users/${this.avatar}`;
  }

  // With Signals Input
  // avatar = input.required<string>();
  // name = input.required<string>();

  // imagePath = computed(() => `../../assets/users/${this.avatar()}`);

  onSelectUser() {}
}
