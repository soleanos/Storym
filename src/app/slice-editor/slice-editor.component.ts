import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { Slice } from '../Slice';

@Component({
  selector: 'app-slice-editor',
  templateUrl: './slice-editor.component.html',
  styleUrls: ['./slice-editor.component.css']
})
export class SliceEditorComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<SliceEditorComponent>,
      @Inject(MAT_DIALOG_DATA) public data: Slice
   ) {}

  ngOnInit() {
  }

}
