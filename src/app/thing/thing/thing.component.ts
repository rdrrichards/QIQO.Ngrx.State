import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Thing } from 'src/app/models/thing';

@Component({
  selector: 'app-thing',
  templateUrl: './thing.component.html',
  styleUrls: ['./thing.component.css']
})
export class ThingComponent implements OnInit {
  @Input() thing: Thing;
  @Output() delete: EventEmitter<Thing> = new EventEmitter<Thing>();
  constructor() { }

  ngOnInit() {
  }
  delThing(thing: Thing) {
    this.delete.emit(thing);
  }

}
