import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  @Input() images:any;

  constructor(private route:ActivatedRoute,private router:Router,
    public carts: CartService) { }

  ngOnInit(): void {
    this.carts.getCartsTotal();
  }

  changeRoute(){
  
    this.router.navigate(['details'],{relativeTo:this.route,state:this.images});
  
}

}
