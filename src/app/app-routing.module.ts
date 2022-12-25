import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { HomeComponent } from './home/home.component';
import { RingComponent } from './ring/ring.component';
import { BangleComponent } from './bangle/bangle.component';
import { EarringComponent } from './earring/earring.component';
import { NecklaceComponent } from './necklace/necklace.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { CartComponent } from './cart/cart.component';


const routes: Routes = [
  { path: '',component: HomeComponent},
  { path: 'ring',component: RingComponent},
  { path: 'bangle',component: BangleComponent}, 
  { path: 'earring',component: EarringComponent}, 
  { path: 'necklace',component: NecklaceComponent},
  { path: 'login',component: LoginComponent}, 
  { path: 'signup',component: SignupComponent},
  { path: 'cart',component: CartComponent},
  { path: 'contact',component: ContactUsComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
