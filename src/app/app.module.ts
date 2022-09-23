import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { HomeComponent } from './home/home.component';
import { FeaturesComponent } from './features/features.component';
import { SearchComponent } from './search/search.component';
import { ElectronicsComponent } from './electronics/electronics.component';
import { ProductimageComponent } from './productimage/productimage.component';
import { FashionComponent } from './fashion/fashion.component';
import { FashiondealsComponent } from './fashion/fashiondeals/fashiondeals.component';
import { BannerComponent } from './banner/banner.component';
import { CounterComponent } from './counter/counter.component';
import { CounterchildComponent } from './counter/counterchild/counterchild.component';
import { ContactComponent } from './contact/contact.component';
import { HttpClientModule } from '@angular/common/http';
import { ProductdetailsComponent } from './productdetails/productdetails.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    FeaturesComponent,
    SearchComponent,
    ElectronicsComponent,
    ProductimageComponent,
    FashionComponent,
    FashiondealsComponent,
    BannerComponent,
    CounterComponent,
    CounterchildComponent,
    ContactComponent,
    ProductdetailsComponent,
    RegisterComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
