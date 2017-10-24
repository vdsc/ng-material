import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';

import {MatMenuModule} from '@angular/material';
import {MatCardModule} from '@angular/material';
import {MatButtonModule} from '@angular/material';
import {MatDialogModule} from '@angular/material';

import { DialogDemoComponent } from './dialog-demo/dialog-demo.component';
import { MydialogComponent } from './mydialog/mydialog.component';

@NgModule({
  declarations: [
    AppComponent,
    DialogDemoComponent,
    MydialogComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatMenuModule,
    MatCardModule,
    MatButtonModule,
    MatDialogModule
  ],
  entryComponents: [
    MydialogComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
