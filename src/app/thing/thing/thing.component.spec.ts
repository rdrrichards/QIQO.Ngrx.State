import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ThingComponent } from './thing.component';

describe('ThingComponent', () => {
  let component: ThingComponent;
  let fixture: ComponentFixture<ThingComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ThingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThingComponent);
    component = fixture.componentInstance;
    component.thing = { id: '1', name: 'Test Thing'};
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('delThing should return void', () => {
    expect(component.delThing({ id: '', name: '' })).toBeUndefined();
  });
});
