import { Directive, ElementRef, Input } from '@angular/core';
import { Status } from 'src/app/shared/model';

@Directive({
  selector: '[appBgByStatus]'
})
export class BgByStatusDirective {
  @Input() appBgByStatus!: Status

  constructor(private eleref: ElementRef) { }

  changeBgColor() {
    let bgColor;
    console.log(this.appBgByStatus)
    switch(this.appBgByStatus) {
      case Status.active: 
        bgColor = 'rgb(11, 179, 53)';
        break;
      case Status.inactive:   
        bgColor = 'orange';
        break;
      case Status.deleted:   
        bgColor = 'rgb(219, 49, 49)';
        break;
    }
    this.eleref.nativeElement.style.background = bgColor;
  }

  ngOnInit() {
    this.changeBgColor();
  }
}
