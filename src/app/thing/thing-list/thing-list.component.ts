import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Thing } from 'src/app/models/thing';

@Component({
  selector: 'app-thing-list',
  templateUrl: './thing-list.component.html',
  styleUrls: ['./thing-list.component.css']
})
export class ThingListComponent implements OnInit {
  @Input() things: Thing[];
  @Output() add: EventEmitter<null> = new EventEmitter<null>();
  @Output() delete: EventEmitter<Thing> = new EventEmitter<Thing>();
  constructor() { }

  ngOnInit() {
  }

  addThing() {
    this.add.emit();
  }
  delThing(thing: Thing) {
    this.delete.emit(thing);
  }
}
