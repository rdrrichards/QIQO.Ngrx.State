import { Component, OnInit, Input } from '@angular/core';
import { ListOption } from '../list-option';
import { UntypedFormGroup, UntypedFormArray, FormControl, UntypedFormBuilder } from '@angular/forms';

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.css']
})
export class ShowComponent implements OnInit {
  @Input() form: UntypedFormGroup;
  @Input() fcn: number;
  @Input() fan: ListOption[];
  @Input() episodeNo: number;
  @Input() episodeName: string;
  @Input() options: ListOption[] = [];
  episodeInfo = '';
  constructor(private fb: UntypedFormBuilder) { }

  ngOnInit() {
    this.episodeInfo = `Episode #${this.episodeNo} -- ${this.episodeName}`;
    // this.opts.push(this.fb.control({ option: '' }));
  }
  get opts() { return this.form.get('options') as UntypedFormArray; }
  optionClick(event: any) {
    console.log('form', this.form.value);
  }
}
