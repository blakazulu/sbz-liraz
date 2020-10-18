import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';

@Component({
  selector: 'sbz-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements OnInit {
  // constructor(private observer: BreakpointObserver) {
  // }

  ngOnInit(): void {
  }
}
