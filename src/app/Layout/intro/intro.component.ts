import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {faFacebook, faGithub, faLinkedin, faMedium, faNpm, faStackOverflow} from '@fortawesome/free-brands-svg-icons';
import {faFilePdf, faFileWord} from '@fortawesome/free-regular-svg-icons';
import {zoomInDownOnEnterAnimation} from 'angular-animations';

@Component({
  selector: 'sbz-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [
    zoomInDownOnEnterAnimation({delay: 500, duration: 2000})
  ]
})
export class IntroComponent implements OnInit {
  faLinkedin = faLinkedin;
  faGithub = faGithub;
  faStackOverflow = faStackOverflow;
  faFacebook = faFacebook;
  faNpm = faNpm;
  faMedium = faMedium;
  faFileWord = faFileWord;
  faFilePdf = faFilePdf;

  constructor() {
  }

  ngOnInit(): void {
  }
}
