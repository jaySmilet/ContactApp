import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddContactComponent } from './contactApp/add-contact/add-contact.component';
import { HomeComponent } from './contactApp/home/home.component';
import { NavigationComponent } from './contactApp/navigation/navigation.component';

const routes: Routes = [

  {
    path: "contactApp", component: NavigationComponent, children: [
      { path: "", component: HomeComponent },
      { path: "add", component: AddContactComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
