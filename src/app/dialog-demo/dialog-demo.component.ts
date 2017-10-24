import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef} from '@angular/material';
import { MydialogComponent } from '../mydialog/mydialog.component';


@Component({
  selector: 'app-dialog-demo',
  templateUrl: './dialog-demo.component.html',
  styleUrls: ['./dialog-demo.component.css']
})
export class DialogDemoComponent implements OnInit {
  dialogResult="";
  isDisabled = "false";
  constructor(public dialog: MatDialog) { }

  ngOnInit() {
    
  }

  openDialog(){
    this.isDisabled = "true";
    let dialogRef = this.dialog.open(MydialogComponent, {
      //panelClass: 'my-full-screen-dialog',
  
  width: '350px',
  data:"this text is passed into the dialog"
});

  dialogRef.afterClosed().subscribe(result => {
  console.log(`Dialog result: ${result}`);
  this.dialogResult = result;
  this.isDisabled="false";
  })
 }
}


  


