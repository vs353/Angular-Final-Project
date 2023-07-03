import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { product } from 'src/app/models/types';
import { ApiService } from 'src/app/services/api.service';
import { CartService } from 'src/app/services/cart.service';
import { UserService } from 'src/app/services/user.service';
import { DialogComponent } from 'src/app/user/userhome/dialog/dialog.component';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { forkJoin, tap } from 'rxjs';
import { LogService } from 'src/app/services/log.service';
@Component({
  selector: 'app-menu-bar',
  templateUrl: './menu-bar.component.html',
  styleUrls: ['./menu-bar.component.css']
})
export class MenuBarComponent implements OnInit {
  log: any;
  searchText: string = "";
  products:any[]=[];

  public totalItem: number = 0;

  constructor(private router: Router, private cartService: CartService,
    private api:ApiService, public apis:ApiService, public route:ActivatedRoute,
    public matSnackbar: MatSnackBar, public cartsService: CartService,
    public userService: UserService,private dialog:MatDialog,
    public logService: LogService) { 
  
  }

  ngOnInit(): void {
    
    this.getProducts();
  }

  navigateToLink(){
    this.router.navigateByUrl("");
  }
  
  logout(){
    this.log.logout();
    window.location.reload();
}

search(){
  console.log(this.searchText);  
  let filteredProduct = this.products.filter(x => x.name?.toLowerCase() == this.searchText.toLowerCase());
  this.searchText = "";
  if(filteredProduct.length > 0) this.changeRoute(filteredProduct[0]);
  else  this.matSnackbar.open("No Products Found",'Ok',{duration: 3000});
}

getProducts(){
  this.api.getProduct().subscribe(res=>{
      this.products = res;
      this.totalItem = res.length;
  });
}

changeRoute(current:product){
  this.router.navigate(['details'],{relativeTo:this.route,state:current});
}

openDialog() {
  this.dialog.open(DialogComponent, {
    width:'30%'
  });
}
}
