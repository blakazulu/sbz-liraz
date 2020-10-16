import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';

@Component({
  selector: 'sbz-text-glitch',
  templateUrl: './text-glitch.component.html',
  styleUrls: ['./text-glitch.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TextGlitchComponent implements OnInit {
  constructor() {
  }

  ngOnInit(): void {
  }

}
