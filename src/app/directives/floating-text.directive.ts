import {AfterViewInit, Directive, ElementRef, Input, Renderer2} from '@angular/core';

@Directive({
  selector: '[sbzFloatingText]'
})
export class FloatingTextDirective implements AfterViewInit {
  @Input() maxFontSize = 20;
  @Input() colorSchemeArray: string[];

  constructor(private elementRef: ElementRef, private renderer: Renderer2) {
  }

  ngAfterViewInit(): void {
    this.init();
    this.animateBackground();
  }

  private init(): void {
    this.colorSchemeArray = this.colorSchemeArray
      ? this.colorSchemeArray
      : ['#FF6633', '#FFB399', '#FF33FF', '#FFFF99', '#00B3E6',
        '#E6B333', '#3366E6', '#999966', '#99FF99', '#B34D4D',
        '#80B300', '#809900', '#E6B3B3', '#6680B3', '#66991A',
        '#FF99E6', '#CCFF1A', '#FF1A66', '#E6331A', '#33FFCC',
        '#66994D', '#B366CC', '#4D8000', '#B33300', '#CC80CC',
        '#66664D', '#991AFF', '#E666FF', '#4DB3FF', '#1AB399',
        '#E666B3', '#33991A', '#CC9999', '#B3B31A', '#00E680',
        '#4D8066', '#809980', '#E6FF80', '#1AFF33', '#999933',
        '#FF3380', '#CCCC00', '#66E64D', '#4D80CC', '#9900B3',
        '#E64D66', '#4DB380', '#FF4D4D', '#99E6E6', '#6666FF'];
  }

  private animateBackground(): void {
    // need to access them in the setTimeout function
    const renderer = this.renderer;
    const elementRef = this.elementRef;

    const chars = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l',
      'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z',
      '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

    setInterval(() => {
      for (let i = 0; i < Math.floor(Math.random() * 5); i++) {
        const character = chars[Math.floor(Math.random() * chars.length)];
        const duration = Math.floor(Math.random() * 15);
        const offset = Math.floor(Math.random() * (45 - duration * 3)) + 3;
        const size = 12 + (this.maxFontSize - duration);
        const color = this.colorSchemeArray[Math.floor(Math.random() * this.colorSchemeArray.length)];
        const span = `<span class="animated-text" style="color: ${color};right: ${offset}vw; font-size: ${size}px;` +
          ` animation-duration: ${duration}s">${character}</span>`;
        elementRef.nativeElement.insertAdjacentHTML('beforeend', span);
        setTimeout(() => {
          renderer.removeChild(elementRef.nativeElement, elementRef.nativeElement.firstChild);
        }, duration * 1000, false, elementRef, renderer);
      }
    }, 250);
  }
}
