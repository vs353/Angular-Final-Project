import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  state?:any;
  qty:any=1;
  buttonstatus:string="Add to the Cart";
  active:boolean=true;

  constructor(private route:ActivatedRoute,private router:Router,
    private cartService: CartService, private  snackbar: MatSnackBar) { 
    this.state=this.router.getCurrentNavigation()?.extras.state;
  }

  ngOnInit(): void {
      
  }

  addToCart(){
    if(!this.state.quantity || this.state.quantity == 0){
      this.snackbar.open("Please Enter Quantity","Ok",{duration: 2000});
      return;
    }

    let state ={ "id": 0 ,
    "productName": this.state.name,
    "ProductImage": this.state.image,
    "Description":this.state.Description,
    "Price":this.state.price,
    "Quantity": this.state.quantity,
    "Total":this.state.total
  };
    this.cartService.addProductToCart(state).subscribe((res)=>{
      console.log(res);  
      this.snackbar.open(`${this.state.name} added to cart successfully`,'Ok',{duration: 2000});
      this.cartService.getCartsTotal();
      this.router.navigate(['/cart']);    
    });
  }
  

}
