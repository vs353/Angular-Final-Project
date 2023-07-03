import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CartService } from 'src/app/services/cart.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  id:any[]=[];
  carts: any[] = [];
  // public carts: any = [];
  public grandTotal !: number;
  constructor(private cartService: CartService, 
    private snackbar: MatSnackBar,
    public userService: UserService) { }

  ngOnInit(): void {
    this.getAllCarts()
    this.grandTotal = this.cartService.getTotalPrice();
  }


  getAllCarts(){
    this.cartService.getCarts().subscribe((res)=>{
      this.carts = res;
      this.grandTotal =0;
      this.grandTotal = this.cartsGrandTotal()
    })
  }

  cartsGrandTotal(){
    let total = 0
    this.carts.forEach((x) => 
      {
        total += (x.Quantity * (isNaN(x.Price) ? 0: x.Price)); 
      })
     return total; 
  }

  removeItem(id: any){
    this.cartService.removeCartItem(id).subscribe(res =>{
      this.snackbar.open("Cart item deleted successfully","Ok",{duration: 3000});
      this.getAllCarts();
      this.cartService.getCartsTotal();
    });
  }

  removeAllItem(){
    this.carts.forEach(x =>{
      this.cartService.removeCartItem(x.id).subscribe();
      this.snackbar.open("Cart items deleted successfully","Ok",{duration: 3000});
      setTimeout(()=>{
        this.getAllCarts();
        this.cartService.getCartsTotal();
      },2000)
      
    })
  }

  emptycart(){
    this.cartService.removeAllCart();
  }
}
