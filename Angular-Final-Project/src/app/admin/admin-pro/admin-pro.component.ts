import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { HomeComponent } from '../home/home.component';
import { ApiService } from 'src/app/services/api.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-admin-pro',
  templateUrl: './admin-pro.component.html',
  styleUrls: ['./admin-pro.component.css']
})
export class AdminProComponent implements OnInit {
  displayedColumns: string[] = ['id', 'name', 'image', 'aboutitem', 'price', 'quantity', 'total', 'action'];
  ItemForm: FormGroup;
  types: any[] = [];
  formBuilder: any;

  constructor(
    private fb: FormBuilder,
    private ps: ApiService,
    private dialogRef: MatDialogRef<HomeComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private productService: ProductService
  ) {
    this.ItemForm = this.fb.group({
      id : [''],
      name : ['', Validators.required],
      categoryId : ['', Validators.required],
      description : ['',Validators.required],
      price : ['',Validators.required],
      image: ['',Validators.required]
    });
  }

  ngOnInit(): void {
    this.ItemForm.patchValue(this.data);


    this.productService.getCategories().subscribe((res)=>{
      this.types = res;
    })
  }

  onFormSubmit() {
    if (this.ItemForm) {
      if (this.data) {
        this.ps.updateProduct(this.data.id, this.ItemForm.value).subscribe({
          next: (val: any) => {
            alert('Products updated successfully');
            this.dialogRef.close(true);
          },
          error: (err: any) => {
            console.error(err);
          },
        });
      } else {
        this.ps.addProduct(this.ItemForm.value).subscribe({
          next: (val: any) => {
            alert('Products added successfully');
            this.dialogRef.close(true);
          },
          error: (err: any) => {
            console.error(err);
          },
        });
      }
    }
  }
}
