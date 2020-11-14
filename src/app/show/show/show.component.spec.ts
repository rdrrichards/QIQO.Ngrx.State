import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ShowComponent } from './show.component';
import { FormsModule, ReactiveFormsModule, FormGroup, FormArray } from '@angular/forms';
import { RadioButtonModule } from 'primeng/radiobutton';

describe('ShowComponent', () => {
  let component: ShowComponent;
  let fixture: ComponentFixture<ShowComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowComponent ],
      imports: [ FormsModule, ReactiveFormsModule, RadioButtonModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowComponent);
    component = fixture.componentInstance;
    component.form = new FormGroup({ options: new FormArray([]) });
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('opts should return something', () => {
    expect(component.opts).toBeTruthy();
  });

  it('optionClick should return void', () => {
    expect(component.optionClick({})).toBeUndefined();
  });
});
