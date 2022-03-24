import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appChangeBackground]'
})
export class ChangeBackgroundDirective {
  color = 'green';

  constructor(private eleRef: ElementRef) { }

  @HostListener('mouseenter')
  onEnter() {
    this.eleRef.nativeElement.style.background = this.color;
  }

}
