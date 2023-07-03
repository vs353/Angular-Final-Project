import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReachusComponent } from './reachus.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from 'src/app/material/material.module';


const route:Routes=[

  {
  path:"",
  component: ReachusComponent}
  ];

  
@NgModule({
  declarations: [
    ReachusComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(route),
    SharedModule,
    FormsModule,
    MaterialModule,
    ReactiveFormsModule
  ]
})
export class ReachusModule { }