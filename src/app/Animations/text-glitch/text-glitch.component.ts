import {ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {zoomInLeftOnEnterAnimation, zoomInRightOnEnterAnimation} from 'angular-animations';
import {Observable, of} from 'rxjs';
import {BreakpointObserver} from '@angular/cdk/layout';

@Component({
  selector: 'sbz-text-glitch',
  templateUrl: './text-glitch.component.html',
  styleUrls: ['./text-glitch.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [
    zoomInLeftOnEnterAnimation({duration: 1500}),
    zoomInRightOnEnterAnimation({duration: 1500, delay: 1000})
  ]
})
export class TextGlitchComponent implements OnInit {
  public typeDeleteFontSize: Observable<string>;

  constructor(private observer: BreakpointObserver, private cdRef: ChangeDetectorRef) {
  }

  ngOnInit(): void {
    this.observer.observe('(max-width: 767px)')
      .subscribe((result) => {
        this.typeDeleteFontSize = result.matches ? of('30px') : of('4vw');
        this.cdRef.markForCheck();
      });
  }
}
