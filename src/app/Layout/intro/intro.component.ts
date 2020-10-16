import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {faFacebook, faGithub, faLinkedin, faStackOverflow} from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'sbz-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class IntroComponent implements OnInit {
  faLinkedin = faLinkedin;
  faGithub = faGithub;
  faStackOverflow = faStackOverflow;
  faFacebook = faFacebook;

  constructor() {
  }

  ngOnInit(): void {
  }
}
