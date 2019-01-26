import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ThingShellComponent } from './thing-shell.component';
import { ThingListComponent } from '../thing-list/thing-list.component';
import { ThingComponent } from '../thing/thing.component';
import { StoreModule } from '@ngrx/store';
import { reducer } from '../../state/app.reducer';

describe('ThingShellComponent', () => {
  let component: ThingShellComponent;
  let fixture: ComponentFixture<ThingShellComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThingShellComponent, ThingListComponent, ThingComponent ],
      imports: [
        RouterTestingModule, BrowserAnimationsModule,
        StoreModule.forRoot({ appState: reducer })
      ]
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

  it('addThing should return void', () => {
    expect(component.addThing()).toBeUndefined();
  });

  it('delThing should return void', () => {
    expect(component.delThing({ id: '', name: '' })).toBeUndefined();
  });

  it('viewShows should return void', () => {
    expect(component.viewShows()).toBeUndefined();
  });
});
