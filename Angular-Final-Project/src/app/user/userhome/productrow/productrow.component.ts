import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { product } from 'src/app/models/types';
import { ApiService } from 'src/app/services/api.service';
import { CartService } from 'src/app/services/cart.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-productrow',
  templateUrl: './productrow.component.html',
  styleUrls: ['./productrow.component.css']
})
export class ProductrowComponent implements OnInit {
  public productList:any;
  @Input() products:any[]=[];
  @Input() producttitle:string="";
  selected: string = "All";
  types=[];


  constructor(public router:Router,
    public route:ActivatedRoute, 
    private api:ApiService,
    private cartService:CartService,
    private productService: ProductService) { }

  ngOnInit(): void { 
    this.api.getProduct()
    .subscribe(res=>{
      this.products = res;


      this.products.forEach((a:any)=>{
        Object.assign(a,{quantity:1,total:a.price,image: a.image})
      });
    })

    this.productService.getCategories().subscribe((res)=>{
      this.types = res;
    })
  }

  addtoCart(item:any){
    this.cartService.addtoCart(item);
  }


  changeRoute(current:product){
    alert("event firing")
    this.router.navigate(['details'],{relativeTo:this.route,state:current});
  }

}