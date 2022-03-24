import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appChangeColor]'
})
export class ChangeColorDirective {

  constructor(private eleRef: ElementRef) { }

  @HostListener('click')
  change() {
    this.eleRef.nativeElement.style.background = '#72C7FC';
  }
}
