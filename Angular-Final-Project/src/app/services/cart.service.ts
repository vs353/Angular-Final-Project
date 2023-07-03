import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, map, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  headers = new HttpHeaders().set('Content-Type', 'application/json');
  public cartItemList: any=[]
  public products = new BehaviorSubject<any>([]);
  apiUrl = "http://localhost:4500";
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json'
      })
  }
  cartsTotal: number = 0;


  constructor(private http: HttpClient) { }
  getProducts(){
    return this.products.asObservable();
  }

  getCarts(){
    return this.http.get<any>("http://localhost:4500/cart") 
    .pipe(map((res:any)=>{
      return res;
    }))
  }

  getCartsTotal(){
    this.http.get<any>("http://localhost:4500/cart").pipe(tap(res =>{ this.cartsTotal = res.length } )).subscribe();
  }

  addProductToCart(productDetails: any){
    return this.http.post("http://localhost:4500/cart",productDetails,this.httpOptions);
  }

  setProduct(product : any){
    this.cartItemList.push(...product);
    this.products.next(product);
  }

  addtoCart(product : any){
    this.cartItemList.push(product);
    this.products.next(this.cartItemList);
    this.getTotalPrice();
    console.log(this.cartItemList)
  }

  getTotalPrice() : number{
    let grandTotal = 0;
    this.cartItemList.map((a:any)=>{
      grandTotal += a.total;
    })
    return grandTotal;
  }

  removeCartItem(id:any){
    return this.http.delete(`${this.apiUrl}/cart/${id}`, { headers: this.headers });
  }

  removeAllCart(){
    this.cartItemList = [];
    this.products.next(this.cartItemList);
  }
}
