import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule } from '@angular/common/http';

import { AppRoutingModule, routingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { NavComponent } from './nav/nav.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { DataService } from './data.service';
import { Sqrt } from './sqrt';
import { AppendCurrency } from './append-currency';
import { User } from './user';
import { PersonchildComponent } from './personchild/personchild.component';
import { PersonparentComponent } from './personparent/personparent.component';
import { Person } from './person';
import { DirectivesComponent } from './directives/directives.component';
import { CardHoverDirective } from './card-hover-directive';
import { Repo } from './repo';

// import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    NavComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    Sqrt,
    AppendCurrency,
    PersonchildComponent,
    PersonparentComponent,
    DirectivesComponent,
    CardHoverDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    routingModule
  ],
  providers: [DataService, User, Person, Repo],
  bootstrap: [AppComponent]
})
export class AppModule { }
