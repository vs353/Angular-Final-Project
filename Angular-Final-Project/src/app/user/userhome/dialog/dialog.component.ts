import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ApiService } from 'src/app/services/api.service';
import { MatDialogRef } from '@angular/material/dialog'; 
import { ProductService } from 'src/app/services/product.service';
@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {

  types=[];
  
  ItemForm !: FormGroup;

  constructor(private formBuilder : FormBuilder, private api : ApiService, private dialogRef : MatDialogRef<DialogComponent>,
    private productService: ProductService) { }

  ngOnInit(): void {
    this.ItemForm = this.formBuilder.group({
      id : [''],
      name : ['', Validators.required],
      categoryId : ['', Validators.required],
      description : ['',Validators.required],
      price : ['',Validators.required],
      image: ['',Validators.required]
    });

    this.productService.getCategories().subscribe((res)=>{
      this.types = res;
    })
  }

  addFood(){
    if(this.ItemForm.valid){
      this.api.postProduct(this.ItemForm.value)
      .subscribe({
        next:(res)=>{
          alert("Food item added successfully");
          this.ItemForm.reset();
          this.dialogRef.close('save');
        },
        error:()=>{
          alert("Error while adding the food item")
        }
      })
    }
  }



}
