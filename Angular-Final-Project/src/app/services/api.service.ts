import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class ApiService {
  addProduct(data: any): Observable<any> {
   return this.http.post("http://localhost:4500/Lassi-Items",data)
  }
  updateProduct(id: any, value: any):Observable<any> {
   return this.http.put(`http://localhost:4500/Lassi-Items/${id}`,value)
  }
  get(http: any): any {
    throw new Error('Method not implemented.');
  }

  constructor(private http: HttpClient) { }

  getProduct(){
    return this.http.get<any>("http://localhost:4500/Lassi-Items") 
    .pipe(map((res:any)=>{
      return res;
    }))
  }

  getCategoryProduct(){
    return this.http.get<any>("http://localhost:4500/Lassi-Items") 
    .pipe(map((res:any)=>{
      return res;
    }))
  }

  postProduct(data : any){
    return this.http.post<any>("http://localhost:4500/Lassi-Items", data);
  }

  getProduct2(){
    return this.http.get<any>("http://localhost:4500/foodList");
  }

  deleteCategory(id: number): Observable<any>{
    return this.http.delete(`http://localhost:4500/Lassi-Items/${id}`);
    }
  }


