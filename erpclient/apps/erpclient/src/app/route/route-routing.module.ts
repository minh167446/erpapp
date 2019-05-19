import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from '../login/login.component';
import { RegisterComponent } from '../register/register.component'
import { DashboardComponent } from '../dashboard/dashboard.component';
import { EmployeeComponent } from '../employee/employee.component';
import { ProfileComponent } from '../profile/profile.component';
import { PostemployeeComponent } from '../postemployee/postemployee.component';
import { DepartmentComponent } from '../department/department.component';
import { SettingsComponent } from '../settings/settings.component';
import { PostdepartmentComponent } from '../postdepartment/postdepartment.component';
import { EditemployeeComponent } from '../editemployee/editemployee.component';
import { DetailemployeeComponent } from '../detailemployee/detailemployee.component';
import { EditdepartmentComponent } from '../editdepartment/editdepartment.component';
import { Page404Component } from '../page404/page404.component';
import { DetailemployeecontactComponent } from '../detailemployeecontact/detailemployeecontact.component';
import { DetailemployeematureComponent } from '../detailemployeemature/detailemployeemature.component';
import { DetailemployeehealthyComponent } from '../detailemployeehealthy/detailemployeehealthy.component';
import { EmployeeloginComponent } from '../employeelogin/employeelogin.component';
const routes: Routes = [ 
  {
  path: '',
  component: LoginComponent
  },{
    path: '404-page-not-working',
    component: Page404Component
  },
  {
    path: 'profile',
    component: ProfileComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'employee',
    component: EmployeeComponent
  },
  {
    path: 'settings',
    component: SettingsComponent
  },
  {
    path: 'employee/login',
    component: EmployeeloginComponent
  },
  {
    path: 'employee/detail/:id',
    component: DetailemployeeComponent
  },
  {
    path: 'employee/detail/contact/:id',
    component: DetailemployeecontactComponent
  },
  {
    path: 'employee/detail/mature/:id',
    component: DetailemployeematureComponent
  },
  {
    path: 'employee/detail/healthy/:id',
    component: DetailemployeehealthyComponent
  },
  {
    path: 'employee/add',
    component: PostemployeeComponent
  },
  {
    path: 'employee/edit/:id',
    component: EditemployeeComponent
  },
  {
    path: 'departments',
    component: DepartmentComponent
  },
  {
    path: 'department/add',
    component: PostdepartmentComponent
  },
  {
    path: 'department/edit/:id',
    component: EditdepartmentComponent
  },
  { path: '404', 
    component: Page404Component
  },
  {
    path: '**',
    redirectTo: '404'
  },
];
// forChild()
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class RouteRoutingModule { }
