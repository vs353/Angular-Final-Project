import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { RouterModule, Routes } from '@angular/router';
import { MaterialModule } from '../material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AdminProComponent } from './admin-pro/admin-pro.component';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { SharedModule } from '../shared/shared.module';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';

const route:Routes=[

  {
  path:"home",
  component: HomeComponent,
}
]
@NgModule({
  declarations: [
    HomeComponent,
    AdminProComponent,
    
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(route),
    MatIconModule,
    MatFormFieldModule,
    FormsModule,
    MatTableModule,
    MatToolbarModule,
    MatDialogModule,
    ReactiveFormsModule,
    MatInputModule,
    SharedModule,
    MatSelectModule,
    MatButtonModule

  ]
})
export class AdminModule { }
