import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';

import {MatMenuModule} from '@angular/material';
import {MatCardModule} from '@angular/material';
import {MatButtonModule} from '@angular/material';
import {MatDialogModule} from '@angular/material';
import {MatSelectModule} from '@angular/material';
import { MatSnackBarModule } from '@angular/material';

import {MatTooltipModule} from '@angular/material';

import { DialogDemoComponent } from './dialog-demo/dialog-demo.component';
import { MydialogComponent } from './mydialog/mydialog.component';
import { TooltipDemoComponent } from './tooltip-demo/tooltip-demo.component';
import { SnackbarDemoComponent } from './snackbar-demo/snackbar-demo.component';

@NgModule({
  declarations: [
    AppComponent,
    DialogDemoComponent,
    MydialogComponent,
    TooltipDemoComponent,
    SnackbarDemoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    MatMenuModule,
    MatCardModule,
    MatButtonModule,
    MatDialogModule,
    MatTooltipModule,
    MatSelectModule,
    MatSnackBarModule
  ],
  entryComponents: [
    MydialogComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
