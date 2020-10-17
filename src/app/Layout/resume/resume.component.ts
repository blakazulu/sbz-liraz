import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';

@Component({
  selector: 'sbz-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,

})
export class ResumeComponent implements OnInit {
  constructor() {
  }

  ngOnInit(): void {
  }
}
