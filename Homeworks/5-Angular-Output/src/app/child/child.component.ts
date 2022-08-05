import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
})
export class ChildComponent implements OnInit {
  @Output() PersonelEvent = new EventEmitter<string>();

  constructor() {}

  ngOnInit(): void {}

  AddPersonel(name: string): void {
    this.PersonelEvent.emit(name);
  }
}
