import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { ContentHomepageComponent } from './home/content-homepage/content-homepage.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { OverviewComponent } from './overview/overview.component';
import { CarComponent } from './car/car.component';
import { CarPage2Component } from './car/car-page2/car-page2.component';
import { CarPage3Component } from './car/car-page3/car-page3.component';
import { CarPage4Component } from './car/car-page4/car-page4.component';
import { ContactComponent } from './contact/contact.component';
import { BookingComponent } from './booking/booking.component';
import { AboutComponent } from './about/about.component';
import { CarDetailComponent } from './car-detail/car-detail.component';

const appRoutes : Routes = [
  { path:'', component: HomeComponent},
  { path:'login', component: LoginComponent},
  { path:'register', component: RegisterComponent},
  { path:'overview', component: OverviewComponent},
  { path:'car', 
  component: CarComponent,
  children: [
    { 
      path: 'id', 
      component: CarDetailComponent
    }
  ]
},
  { path:'car/car-page2', component: CarPage2Component},
    { path:'car/car-page3', component: CarPage3Component},
    { path:'car/car-page4', component: CarPage4Component},
    { path:'contact', component: ContactComponent},
    { path:'about', component: AboutComponent},
    { path:'car-detail', component: CarDetailComponent},
];
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    ContentHomepageComponent,
    FooterComponent,
    LoginComponent,
    RegisterComponent,
    OverviewComponent,
    CarComponent,
    CarPage2Component,
    CarPage3Component,
    CarPage4Component,
    ContactComponent,
    BookingComponent,
    AboutComponent,
    CarDetailComponent
  ],
  
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
