import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThingListComponent } from './thing-list.component';
import { ThingComponent } from '../thing/thing.component';

describe('ThingListComponent', () => {
  let component: ThingListComponent;
  let fixture: ComponentFixture<ThingListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThingListComponent, ThingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThingListComponent);
    component = fixture.componentInstance;
    component.things = [];
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('addThing should return void', () => {
    expect(component.addThing()).toBeUndefined();
  });

  it('delThing should return void', () => {
    expect(component.delThing({ id: '', name: '' })).toBeUndefined();
  });
});
