import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ShowListComponent } from './show-list.component';
import { AccordionModule } from 'primeng/accordion';
import { ShowComponent } from '../show/show.component';
import { ReactiveFormsModule, FormArray, FormGroup, FormControl } from '@angular/forms';
import { RadioButtonModule } from 'primeng/radiobutton';
import { Episode } from '../episode';

describe('ShowListComponent', () => {
  let component: ShowListComponent;
  let fixture: ComponentFixture<ShowListComponent>;
  let de: DragEvent;
  let episode: Episode;
  const episodes: Episode[] = [];

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowListComponent, ShowComponent ],
      imports: [ BrowserAnimationsModule, AccordionModule, ReactiveFormsModule, RadioButtonModule ]
    })
    .compileComponents();
    de = new DragEvent('');
    episode = { episodeNo: 1, episodeName: 'Test Episode' };
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowListComponent);

    episodes.push({ episodeNo: 1, episodeName: 'Serentiy' });
    episodes.push({ episodeNo: 2, episodeName: 'The Train Job' });
    episodes.push({ episodeNo: 3, episodeName: 'Bushwhacked' });
    episodes.push({ episodeNo: 4, episodeName: 'Shindig' });
    episodes.push({ episodeNo: 5, episodeName: 'Safe' });
    episodes.push({ episodeNo: 6, episodeName: 'Our Misses Reynolds' });
    episodes.push({ episodeNo: 7, episodeName: 'Jaynestown' });
    episodes.push({ episodeNo: 8, episodeName: 'Out of Gas' });
    episodes.push({ episodeNo: 9, episodeName: 'Ariel' });
    episodes.push({ episodeNo: 10, episodeName: 'War Stories' });
    episodes.push({ episodeNo: 11, episodeName: 'Trash' });
    episodes.push({ episodeNo: 12, episodeName: 'The Message' });
    episodes.push({ episodeNo: 13, episodeName: 'Heart of Gold' });
    episodes.push({ episodeNo: 14, episodeName: 'Objects in Space' });

    const fa =  new FormArray([]);
    episodes.forEach(o => {
      fa.push(new FormControl(''));
    });

    component = fixture.componentInstance;
    component.showForm = new FormGroup({ options: fa });
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('formOptions should return something', () => {
    expect(component.formOptions).toBeTruthy();
  });

  it('dragStart should return void', () => {
    expect(component.dragStart(de, episode, 1)).toBeUndefined();
  });

  it('dragEnd should return void', () => {
    expect(component.dragEnd(de)).toBeUndefined();
  });

  it('onDragEnter should return void', () => {
    component.dragOverItemIndex = 1;
    expect(component.onDragEnter(de, 1)).toBeUndefined();
  });

  it('onDragEnter should return void', () => {
    component.dragOverItemIndex = 6;
    expect(component.onDragEnter(de, 1)).toBeUndefined();
  });

  it('dragLeave should return void', () => {
    expect(component.dragLeave(de)).toBeUndefined();
  });

  it('dragDrop should return void', () => {
    component.episodes = episodes;
    component.dragOverItemIndex = 3;
    component.draggedItemIndex = 7;
    expect(component.dragDrop(de, episode, 5)).toBeUndefined();
  });

  it('reorderArray should return void', () => {
    expect(component.reorderArray([], 0, 1)).toBeUndefined();
  });

  it('reorderFormArray should return void', () => {
    const fa = component.showForm.get('options') as FormArray;
    expect(component.reorderFormArray(fa, 1, 8)).toBeUndefined();
  });
});
