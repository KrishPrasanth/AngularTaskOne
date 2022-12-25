import { NgModule } from '@angular/core';
import { bootstrapApplication, BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { HomeComponent } from './home/home.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RingComponent } from './ring/ring.component';
import { NecklaceComponent } from './necklace/necklace.component';
import { EarringComponent } from './earring/earring.component';
import { BangleComponent } from './bangle/bangle.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { CartComponent } from './cart/cart.component';
import { FormsModule } from '@angular/forms';
import { CarouselComponent } from './carousel/carousel.component'


@NgModule({
  declarations: [
    AppComponent,
    ContactUsComponent,
    HomeComponent,
    NavBarComponent,
    RingComponent,
    NecklaceComponent,
    EarringComponent,
    BangleComponent,
    LoginComponent,
    SignupComponent,
    CartComponent,
    CarouselComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    NgbModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
