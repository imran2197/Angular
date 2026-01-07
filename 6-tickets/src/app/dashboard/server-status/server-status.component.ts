import {
  Component,
  DestroyRef,
  effect,
  inject,
  OnDestroy,
  OnInit,
  signal,
} from '@angular/core';

@Component({
  selector: 'app-server-status',
  standalone: true,
  imports: [],
  templateUrl: './server-status.component.html',
  styleUrl: './server-status.component.css',
})
// , OnDestroy
export class ServerStatusComponent implements OnInit {
  // currentStatus: 'unknown' | 'online' | 'offline' = 'offline';
  currentStatus = signal<'unknown' | 'online' | 'offline'>('offline');
  // private interval?: ReturnType<typeof setInterval>;
  private destroyRef = inject(DestroyRef);
  constructor() {
    effect(() => {
      console.log(this.currentStatus());
    });
  }

  ngOnInit() {
    // this.interval
    const interval = setInterval(() => {
      const random = Math.random();
      if (random < 0.5) {
        // this.currentStatus = 'online';
        this.currentStatus.set('online');
      } else if (random < 0.9) {
        // this.currentStatus = 'offline';
        this.currentStatus.set('offline');
      } else {
        // this.currentStatus = 'unknown';
        this.currentStatus.set('unknown');
      }
    }, 5000);

    this.destroyRef.onDestroy(() => {
      clearInterval(interval);
    });
  }

  // ngOnDestroy(): void {
  //   clearInterval(this.interval);
  // }
}
