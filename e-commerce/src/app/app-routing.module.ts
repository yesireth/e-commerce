import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LogInComponent } from './components/log-in/log-in.component';
import { ProductsComponent } from './components/products/products.component';
import{ShoppingCartComponent} from './components/shopping-cart/shopping-cart.component'
import { ProfileComponent } from './components/profile/profile.component';


const routes: Routes = [
  {path : '', redirectTo: 'home', pathMatch: 'full'},
  {path : 'home', component: LogInComponent },
  {path : 'products', component: ProductsComponent },
  {path : 'shopping-cart', component: ShoppingCartComponent },
  {path : 'profile', component: ProfileComponent },
  {path : '**', redirectTo: 'home', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
