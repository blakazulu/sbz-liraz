import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';

@Component({
  selector: 'sbz-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PortfolioComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
  }

}
