import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {zoomInLeftOnEnterAnimation, zoomInRightOnEnterAnimation} from 'angular-animations';

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
  constructor() {
  }

  ngOnInit(): void {
  }

}
