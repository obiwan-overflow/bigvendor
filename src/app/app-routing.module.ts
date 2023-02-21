import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignInComponent } from './sign-in/sign-in.component';
import { LayoutComponent } from './layout/layout.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { VendorListsComponent } from './admin/vendor-lists/vendor-lists.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      // Add child routes for the other pages here
      { path: '', component: DashboardComponent },
      { path: 'dashboard', component: DashboardComponent },
      { path: 'admin/vendor/lists', component: VendorListsComponent }
    ]
  },
  { path: 'sign-in', component: SignInComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
