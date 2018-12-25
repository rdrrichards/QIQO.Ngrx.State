import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThingShellComponent } from './thing-shell.component';

describe('ThingShellComponent', () => {
  let component: ThingShellComponent;
  let fixture: ComponentFixture<ThingShellComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThingShellComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThingShellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
