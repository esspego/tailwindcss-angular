import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { StyleGuideComponent } from './pages/style-guide/style-guide.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent} ,
  { path: 'contact', component: HomeComponent} ,
  { path: 'about', component: HomeComponent} ,
  { path: 'style-guide', component: StyleGuideComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
