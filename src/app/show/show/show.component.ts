import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.css']
})
export class ShowComponent implements OnInit {
  @Input() episodeNo: number;
  @Input() episodeName: string;
  episodeInfo = '';
  constructor() { }

  ngOnInit() {
    this.episodeInfo = `Episode #${this.episodeNo} -- ${this.episodeName}`;
  }

}
