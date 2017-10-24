import { Component, OnInit, Inject } from '@angular/core';
import {MatDialogRef} from '@angular/material';
import {MAT_DIALOG_DATA} from '@angular/material';

@Component({
  selector: 'app-mydialog',
  templateUrl: './mydialog.component.html',
  styleUrls: ['./mydialog.component.css']
})
export class MydialogComponent implements OnInit {

  constructor(public thisDialogRef: MatDialogRef<MydialogComponent>, @Inject(MAT_DIALOG_DATA) public data: string) { }

  ngOnInit() {
    this.thisDialogRef.updatePosition({ top: '25px', left: '25px' });
  }

  onCloseConfirm(){
    this.thisDialogRef.close('Confirm');
  }

  onCloseCancel(){
    this.thisDialogRef.close('Cancel');
  }

}
