import { Component, OnInit, OnDestroy, Input } from '@angular/core';

@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.scss']
})
export class StatsComponent implements OnInit, OnDestroy {
  private subscription: any;
  @Input() time!: string;
  @Input() moves!: number;
  @Input() fails!: number;

  constructor() {}

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
