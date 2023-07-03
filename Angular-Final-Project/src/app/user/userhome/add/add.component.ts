import { Component, OnInit } from '@angular/core';
import { Food } from './prod-model';
import { ProductService } from 'src/app/services/product.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  model : Food = new Food();

  constructor(private productService: ProductService,
    private snackbar: MatSnackBar,
    private route: Router) { }

  ngOnInit(): void {
  }

  onSubmit(data){
    console.log(data?.value);
    this.productService.addProduct({model: data.value}).subscribe(res => {
      this.snackbar.open("Food Added Successfully","Ok",{duration: 2000});
      this.route.navigate(['/user/home'])
    })
  }
}
