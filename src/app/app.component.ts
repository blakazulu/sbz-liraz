import {ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {BreakpointObserver} from '@angular/cdk/layout';
import {Observable, of} from 'rxjs';

@Component({
  selector: 'sbz-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements OnInit {
  public notMobile$: Observable<boolean>;

  constructor(private observer: BreakpointObserver, private cdRef: ChangeDetectorRef) {
  }

  ngOnInit(): void {
    this.observer.observe('(min-width: 767px)')
      .subscribe((result) => {
        this.notMobile$ = of(result.matches);
        this.cdRef.markForCheck();
      });
  }
}
