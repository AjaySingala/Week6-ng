import { NgModule, ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { PersonparentComponent } from './personparent/personparent.component';
import { DirectivesComponent } from './directives/directives.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about/:id', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'people', component: PersonparentComponent },
  { path: 'directives', component: DirectivesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingModule: ModuleWithProviders = RouterModule.forRoot(routes);
