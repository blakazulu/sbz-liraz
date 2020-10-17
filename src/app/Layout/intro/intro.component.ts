import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  OnInit,
  QueryList,
  Renderer2,
  ViewChildren,
  ViewEncapsulation
} from '@angular/core';
import {faFacebook, faGithub, faLinkedin, faStackOverflow} from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'sbz-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None
})
export class IntroComponent implements OnInit, AfterViewInit {
  @ViewChildren('styleDiv', {read: ElementRef}) children: QueryList<ElementRef>;

  faLinkedin = faLinkedin;
  faGithub = faGithub;
  faStackOverflow = faStackOverflow;
  faFacebook = faFacebook;

  constructor(private renderer: Renderer2, private host: ElementRef) {
  }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.animateBackground();
  }

  private animateBackground(): void {
    const renderer = this.renderer;
    const children = this.children;
    const host = this.host;
    const chars = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l',
      'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z',
      '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
    setInterval(() => {
      for (let i = 0; i < Math.floor(Math.random() * 5); i++) {
        const character = chars[Math.floor(Math.random() * chars.length)];
        const duration = Math.floor(Math.random() * 15);
        const offset = Math.floor(Math.random() * (45 - duration * 3)) + 3;
        const size = 12 + (15 - duration);
        const span = '<span class="animated-text" style="right:' + offset + 'vw; font-size: ' +
          +size + 'px; animation-duration:' + duration + 's">' + character + '</span>';
        this.children.first.nativeElement.insertAdjacentHTML('beforeend', span);
        setTimeout(() => {
          // renderer.removeChild(children.first.nativeElement.parentNode, children.first.nativeElement);
        }, duration * 1000, false, host, children, renderer);
      }
    }, 250, host, children, renderer);
  }
}
