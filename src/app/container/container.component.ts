import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss']
})
export class ContainerComponent implements OnInit {
  columns = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  constructor() { }

  ngOnInit(): void {
  }

}
