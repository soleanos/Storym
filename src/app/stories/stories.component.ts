import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Story } from '../story';

@Component({
  selector: 'app-stories',
  templateUrl: './stories.component.html',
  styleUrls: ['./stories.component.css']
})
export class StoriesComponent implements OnInit {

  @Input() stories: Story[];
  @Output() storiesChange = new EventEmitter<Story[]>();

  constructor() { }

  ngOnInit() {
  }

  changed(newValue) {
    console.log('newValue', newValue);
    if ( newValue) {
      this.storiesChange.emit(newValue);
    }
  }

}
