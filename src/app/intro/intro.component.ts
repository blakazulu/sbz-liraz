import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';

@Component({
  selector: 'sbz-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class IntroComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
  }

}
