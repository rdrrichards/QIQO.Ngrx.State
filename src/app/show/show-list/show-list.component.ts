import { Component, OnInit } from '@angular/core';
import { Episode } from '../episode';

@Component({
  selector: 'app-show-list',
  templateUrl: './show-list.component.html',
  styleUrls: ['./show-list.component.css']
})
export class ShowListComponent implements OnInit {
  episodes: Episode[] = [];
  draggedItemIndex: number;
  dragOverItemIndex: number;
  constructor() { }

  ngOnInit() {
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
  }
  dragStart(event: DragEvent, episode: Episode, index: number) {
    console.log('dragStart event:episode:index', event, episode, index);
    this.draggedItemIndex = index;
  }
  dragEnd(event: DragEvent) {
    console.log('dragEnd event', event);
  }
  onDragEnter(event: DragEvent, index: number) {
    // console.log('onDragOver event:index', event, index);
    this.dragOverItemIndex = index;
  }
  dragLeave(event: DragEvent) {
    this.dragOverItemIndex = null;
  }
  dragDrop(event: DragEvent, episode: Episode, index: number) {
    console.log('dragDrop event:episode:index', event, episode, index);
    // let dropIndex = (this.draggedItemIndex > index) ? index : (index === 0) ? 0 : index - 1;
    this.reorderArray(this.episodes, this.draggedItemIndex, index);
    this.dragOverItemIndex = null;
    // this.onReorder.emit(event);
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
