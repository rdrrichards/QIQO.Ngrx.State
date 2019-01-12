import { Component, OnInit } from '@angular/core';
import { Episode } from '../episode';
import { ListOption } from '../list-option';
import { FormGroup, FormBuilder, FormArray } from '@angular/forms';

@Component({
  selector: 'app-show-list',
  templateUrl: './show-list.component.html',
  styleUrls: ['./show-list.component.css']
})
export class ShowListComponent implements OnInit {
  showForm: FormGroup = new FormGroup({});
  episodes: Episode[] = [];
  options: ListOption[] = [];
  draggedItemIndex: number;
  dragOverItemIndex: number;
  dragging = false;
  constructor(private fb: FormBuilder) {
    this.episodes.push({ episodeNo: 1, episodeName: 'Serentiy' });
    this.episodes.push({ episodeNo: 2, episodeName: 'The Train Job' });
    this.episodes.push({ episodeNo: 3, episodeName: 'Bushwhacked' });
    this.episodes.push({ episodeNo: 4, episodeName: 'Shindig' });
    this.episodes.push({ episodeNo: 5, episodeName: 'Safe' });
    this.episodes.push({ episodeNo: 6, episodeName: 'Our Misses Reynolds' });
    this.episodes.push({ episodeNo: 7, episodeName: 'Jaynestown' });
    this.episodes.push({ episodeNo: 8, episodeName: 'Out of Gas' });
    this.episodes.push({ episodeNo: 9, episodeName: 'Ariel' });
    this.episodes.push({ episodeNo: 10, episodeName: 'War Stories' });
    this.episodes.push({ episodeNo: 11, episodeName: 'Trash' });
    this.episodes.push({ episodeNo: 12, episodeName: 'The Message' });
    this.episodes.push({ episodeNo: 13, episodeName: 'Heart of Gold' });
    this.episodes.push({ episodeNo: 14, episodeName: 'Objects in Space' });

    this.options.push({ value: 'V1', label: 'List option 1' });
    this.options.push({ value: 'V2', label: 'List option 2' });
    this.options.push({ value: 'V3', label: 'List option 3' });
    this.options.push({ value: 'V4', label: 'List option 4' });

    this.showForm = this.fb.group({
      options: this.buildFromArray()
    });
  }
  get formOptions() { return this.showForm.get('options') as FormArray; }
  ngOnInit() {
    // console.log('showForm', this.showForm);
  }
  buildFromArray() {
    const fa = this.fb.array([]);
    this.episodes.forEach(o => {
      fa.push(this.fb.control(''));
    });
    return fa;
  }
  dragStart(event: DragEvent, episode: Episode, index: number) {
    console.log('dragStart event:episode:index', event, episode, index);
    this.draggedItemIndex = index;
    this.dragging = true;
  }
  dragEnd(event: DragEvent) {
    // console.log('dragEnd event', event);
    this.dragging = false;
  }
  onDragEnter(event: DragEvent, index: number) {
    // console.log('onDragOver event:index', event, index);
    if (this.dragging && this.draggedItemIndex !== index && this.draggedItemIndex + 1 !== index) {
      this.dragOverItemIndex = index;
      event.preventDefault();
    }
  }
  dragLeave(event: DragEvent) {
    this.dragOverItemIndex = null;
  }
  dragDrop(event: DragEvent, episode: Episode, index: number) {
    console.log('dragDrop event:episode:index', event, episode, index);
    const selectedOptions = [];
    this.formOptions.controls.forEach(c => {
      if (c.value) {
        selectedOptions.push({ index: this.formOptions.controls.indexOf(c), value: c.value  });
      }
    });
    console.log('selectedOptions', selectedOptions);
    console.log('this.episodes', Object.assign([], this.episodes));
    // let dropIndex = (this.draggedItemIndex > index) ? index : (index === 0) ? 0 : index - 1;
    this.reorderArray(this.episodes, this.draggedItemIndex, index);
    this.dragOverItemIndex = null;
    // this.onReorder.emit(event);
    console.log('this.episodes', this.episodes);
    event.preventDefault();
  }
  reorderArray(value: any[], from: number, to: number) {
    let target: number;
    if (value && (from !== to)) {
        if (to >= value.length) {
            target = to - value.length;
            while ((target--) + 1) {
                value.push(undefined);
            }
        }
        value.splice(to, 0, value.splice(from, 1)[0]);
    }
  }
}
