import { Component, OnInit } from '@angular/core';
import { product } from 'src/app/models/types';
import { ProductService } from 'src/app/services/product.service';
import { UserService } from 'src/app/services/user.service';
@Component({
  selector: 'app-userhome',
  templateUrl: './userhome.component.html',
  styleUrls: ['./userhome.component.css']
})
export class UserhomeComponent implements OnInit {
  products:product[]=[];
  sproducts:product[]=[];
  vproducts:product[]=[];
  fproducts:product[]=[];
  s1products:product[]=[];
  jproducts:product[]=[];
  cproducts:product[]=[];

  constructor(private ps:ProductService,
    public userService: UserService) { }

  ngOnInit(): void {
    this.ps.getProducts().subscribe( {
     next: (data:product[])=>this.products = data,
     error: ()=> this.products = []
    }
    )
    this.ps.getProducts2("Lassi").subscribe(
      {
        next: (data:product[])=>this.fproducts = data,
        error: ()=> this.fproducts = []
       }
   )
   this.ps.getProducts2("Special Lassi").subscribe(
    {
      next: (data:product[])=>this.vproducts = data,
      error: ()=> this.vproducts = []
     }
   )
   this.ps.getProducts2("Super Saver Combos").subscribe(
    {
      next: (data:product[])=>this.sproducts = data,
      error: ()=> this.sproducts = []
     }
   )
   this.ps.getProducts2("Oreo Shakes").subscribe(
    {
      next: (data:product[])=>this.s1products = data,
      error: ()=> this.sproducts = []
     }
   )
   this.ps.getProducts2("Cold Coffee").subscribe(
    {
      next: (data:product[])=>this.jproducts = data,
      error: ()=> this.sproducts = []
     }
   )
   this.ps.getProducts2("Smoothies With Ice Cream").subscribe(
    {
      next: (data:product[])=>this.cproducts = data,
      error: ()=> this.sproducts = []
     }
   )
   
  }

}
