import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';

@Component({
  selector: 'sbz-shatter',
  templateUrl: './shatter.component.html',
  styleUrls: ['./shatter.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ShatterComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
  }

}
