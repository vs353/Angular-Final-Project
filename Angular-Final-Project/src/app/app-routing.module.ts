import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './user/home/home.component';
import { CartComponent } from './user/userhome/cart/cart.component';
import { LoginComponent } from './login/login.component';
import { ReachusComponent } from './user/userhome/reachus/reachus.component';



const routes: Routes = [
  {path:"",component:LoginComponent},
  {path:"user",
  loadChildren:() => import('./user/user.module').then(m => m.UserModule)},
  {path:"admin",loadChildren: 
  () => import('./admin/admin.module').then(m => m.AdminModule)},
  {path:"cart",component: CartComponent},

  {path:"reachus",loadChildren: 
  () => import('./user/userhome/reachus/reachus.module').then(m => m.ReachusModule)},
  {path:"reachus",component:ReachusComponent}
  ];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
