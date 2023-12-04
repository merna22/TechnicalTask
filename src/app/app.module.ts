import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import {MatTableModule} from '@angular/material/table';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import {MatCardModule} from '@angular/material/card';
import { FormsModule } from '@angular/forms';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';
import{BrowserAnimationsModule} from '@angular/platform-browser/animations'
import {MatDialogModule, MatDialogRef} from '@angular/material/dialog';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    EmployeeListComponent,
    EmployeeDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatTableModule,
    MatCardModule,
    FormsModule,
    MatSelectModule,
    MatFormFieldModule,
    BrowserAnimationsModule,
    MatDialogModule,
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
