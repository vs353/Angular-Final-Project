import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { UserhomeComponent } from './userhome/userhome.component';
import { ProductrowComponent } from './userhome/productrow/productrow.component';
import { ProductComponent } from './userhome/product/product.component';
import { DetailsComponent } from './userhome/details/details.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { CartComponent } from './userhome/cart/cart.component';
import { MaterialModule } from '../material/material.module';
import { AddComponent } from './userhome/add/add.component';
import { ProductGridComponent } from './userhome/product-grid/product-grid.component';
import { DialogComponent } from './userhome/dialog/dialog.component';


const route:Routes=[

  {
  path:"home",
  component: HomeComponent,
  children: [
    {
      path: "",
      component: UserhomeComponent
    },
    {
      path:"details",
      component: DetailsComponent
    },
    {
      path: "cart",
      component:CartComponent
    }
  ]
}
]

@NgModule({
  declarations: [
    HomeComponent,
    UserhomeComponent,
    ProductrowComponent,
    ProductComponent,
    DetailsComponent,
    CartComponent,
    AddComponent,
    ProductGridComponent,
    DialogComponent

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
export class UserModule { }