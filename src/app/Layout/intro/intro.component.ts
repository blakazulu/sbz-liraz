import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';
import {faFacebook, faGithub, faLinkedin, faStackOverflow} from '@fortawesome/free-brands-svg-icons';
import {Observable} from 'rxjs';
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
  @Input() isMobile$: Observable<boolean>;
  faLinkedin = faLinkedin;
  faGithub = faGithub;
  faStackOverflow = faStackOverflow;
  faFacebook = faFacebook;
  public intersectOptions = {rootMargin: '0px', threshold: 0};
  public isVisible: boolean;

  constructor() {
  }

  ngOnInit(): void {
  }

  intersectionChanged(isVisible: boolean): void {
    this.isVisible = isVisible;
  }
}
